package com.sonicwall.api.cas.incident;

import com.sonicwall.api.*;
import io.swagger.annotations.*;
import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
import static org.springframework.http.MediaType.*;
import static com.sonicwall.model.OperationResponse.*;
import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.cas.incident.*;
import com.sonicwall.model.cas.incident.IncidentDetailModel.*;
import com.sonicwall.repo.cas.incident.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/cas", produces = { "application/json" })
@Api(tags = {"Incidents"})
public class IncidentController {

  @Autowired private JdbcTemplate jdbcTemplate;
	@Autowired private IncidentDetailRepo incidentService;

  @ApiOperation(value = "List of incidents", response = IncidentDetailResponse.class)
  @RequestMapping(value = "/incidents", method = RequestMethod.GET)
  public IncidentDetailResponse getIncidentsByPage(
    @ApiParam(value = ""    ) @RequestParam(value = "page"  ,  defaultValue="0"   ,  required = false) Integer page,
    @ApiParam(value = "between 1 to 100 allowed" ) @RequestParam(value = "size"  ,  defaultValue="20" ,  required = false) Integer size,
    Pageable pageable
  ) {
      IncidentDetailResponse resp = new IncidentDetailResponse();
      Page<IncidentDetailModel> incidentPage = incidentService.findAll(pageable);
      resp.setPageStats(incidentPage, true);
      resp.setItems(incidentPage.getContent());
      return resp;
  }

  @ApiOperation(value = "Incidents by severiry", response = IncidentBySeverityResponse.class)
  @RequestMapping(value = "/incidents-by-severity", method = RequestMethod.GET)
  public IncidentBySeverityResponse getIncidentsBySeverity() {
    String sql = "select count(*) as count, severity from incident_detail group by severity";
    String countType = new String();
    long count;
    IncidentBySeverityResponse resp = new IncidentBySeverityResponse();
    IncidentBySeverityModel incidentBySeverity = new IncidentBySeverityModel();

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("severity");
        count = (long)row.get("count");
        switch (countType) {
          case "info":
            incidentBySeverity.setInfo(count);
            break;
          case "warning":
            incidentBySeverity.setWarning(count);
            break;
          case "critical":
            incidentBySeverity.setCritical(count);
            break;
          case "alert":
            incidentBySeverity.setAlert(count);
            break;
        }
    }
    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by severity");
    resp.setContent(incidentBySeverity);
    return resp;
  }

  @ApiOperation(value = "Incident by status", response = IncidentByStatusResponse.class)
  @RequestMapping(value = "/incidents-by-status", method = RequestMethod.GET)
  public IncidentByStatusResponse getIncidentsByStatus() {
    String sql = "select count(*) as count, status from incident_detail group by status";
    String countType = new String();
    long count;
    IncidentByStatusResponse resp = new IncidentByStatusResponse();
    IncidentByStatusModel incidentByStatus = new IncidentByStatusModel();

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("status");
        count = (long)row.get("count");
        switch (countType) {
          case "NEW":
            incidentByStatus.setNewStatus(count);
            break;
          case "IN_PROGRESS":
            incidentByStatus.setInProgress(count);
            break;
          case "DISMISSED":
            incidentByStatus.setDismissed(count);
            break;
          case "RESOLVED":
            incidentByStatus.setResolved(count);
            break;
        }
    }
    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by status");
    resp.setContent(incidentByStatus);
    return resp;
  }

  @ApiOperation(value = "Incident by severity and status", response = IncidentBySeverityStatusResponse.class)
  @RequestMapping(value = "/incidents-by-severity-and-status", method = RequestMethod.GET)
  public IncidentBySeverityStatusResponse getIncidentsByStatusAndSeverity() {
    String sql = "select count(*) as count, concat(severity,'-',status) as sevirity_status from incident_detail group by severity, status order by severity";
    String countType = new String();
    long count;
    IncidentBySeverityStatusResponse resp = new IncidentBySeverityStatusResponse();
    IncidentBySeverityStatusModel severityStatus = new IncidentBySeverityStatusModel();
    IncidentByStatusModel alert    = new IncidentByStatusModel();
    IncidentByStatusModel info     = new IncidentByStatusModel();
    IncidentByStatusModel warning  = new IncidentByStatusModel();
    IncidentByStatusModel critical = new IncidentByStatusModel();


    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("sevirity_status");
        count = (long)row.get("count");
        switch (countType) {
          case "alert-NEW":           alert.setNewStatus(count) ; break;
          case "alert-IN_PROGRESS":   alert.setInProgress(count); break;
          case "alert-DISMISSED":     alert.setDismissed(count) ; break;
          case "alert-RESOLVED":      alert.setResolved(count)  ; break;

          case "info-NEW":            info.setNewStatus(count) ; break;
          case "info-IN_PROGRESS":    info.setInProgress(count); break;
          case "info-DISMISSED":      info.setDismissed(count) ; break;
          case "info-RESOLVED":       info.setResolved(count)  ; break;

          case "warning-NEW":         warning.setNewStatus(count) ; break;
          case "warning-IN_PROGRESS": warning.setInProgress(count); break;
          case "warning-DISMISSED":   warning.setDismissed(count) ; break;
          case "warning-RESOLVED":    warning.setResolved(count)  ; break;

          case "critical-NEW":        critical.setNewStatus(count) ; break;
          case "critical-IN_PROGRESS":critical.setInProgress(count); break;
          case "critical-DISMISSED":  critical.setDismissed(count) ; break;
          case "critical-RESOLVED":   critical.setResolved(count)  ; break;

        }
    }
    severityStatus.setAlert(alert);
    severityStatus.setInfo(info);
    severityStatus.setWarning(warning);
    severityStatus.setCritical(critical);

    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by Severity and status");
    resp.setContent(severityStatus);
    return resp;
  }

/*
  @ApiOperation(value = "List of incidents", response = IncidentResponse.class)
  @ApiResponses(value = { @ApiResponse(code = 200, message = "List of incidents", response = IncidentResponse.class) })
  @RequestMapping(value = "/incidents", method = RequestMethod.GET)
  public IncidentResponse getIncidents(
    @ApiParam(value = ""    ) @RequestParam(value = "start"  ,  defaultValue="1"   ,  required = false) Integer start,
    @ApiParam(value = "between 1 to 1000 allowed" ) @RequestParam(value = "limit"  ,  defaultValue="100" ,  required = false) Integer limit,
    @ApiParam(value = ""    ) @RequestParam(value = "filter" ,  required = false) String filter
  ) throws NotFoundException {

      IncidentResponse resp = new IncidentResponse();
      //resp.setSuccess(true);
      resp.setMsgType(ResponseStatusEnum.SUCCESS);
      Faker faker = new Faker();
      if (limit == null || limit < 1){
        limit = 1000;
      }
      else{
        limit =  (limit > 1000) ? 1000 : limit;
      }
      Date startDate, endDate;
      Calendar cal = Calendar.getInstance();
      endDate = new Date();
      cal.setTime(endDate);
      cal.add(Calendar.MONTH, -1);
      startDate = cal.getTime();

      for (int i=0; i < limit ;i++) {
          IncidentModel incident = new IncidentModel();
          resp.getData().add(incident);
      }
      // do some magic!
      resp.setTotalCount(1000000);
      return resp;
  }
  */


}