package com.sonicwall.api.casb.incidents;

import com.sonicwall.api.*;
import io.swagger.annotations.*;
import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;
import static com.sonicwall.model.BaseResponse.*;
import java.util.*;
import com.sonicwall.model.*;
import com.sonicwall.model.casb.incidents.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/casb", produces = { "application/json" })
@Api(tags = {"Incidents"})
public class Incidents {
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

}
