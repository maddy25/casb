package com.sonicwall.model;

import io.swagger.annotations.*;
import org.springframework.data.domain.*;
import lombok.*;
import java.util.*;
import static com.sonicwall.model.OperationResponse.*;

//@Data //for getters and setters
public class PageResponse extends OperationResponse {
  @Getter @Setter private boolean  first;
  @Getter @Setter private boolean  last;
  @Getter @Setter private int currentPageNumber;
  @Getter @Setter private int itemsInPage;
  @Getter @Setter private int pageSize;
  @Getter @Setter private int totalPages;
  @Getter @Setter private long totalItems;
  @Getter @Setter private Sort sort;
  private List items;

  public void setPageStats(Page pg, boolean setDefaultMessage){
    this.first             = pg.isFirst();
    this.last              = pg.isLast();
    this.currentPageNumber = pg.getNumber()+1;
    this.itemsInPage       = pg.getNumberOfElements();
    this.pageSize          = pg.getSize();
    this.totalPages        = pg.getTotalPages();
    this.totalItems        = pg.getTotalElements();
    //this.items             = pg.getContent();
    this.sort              = pg.getSort();
    if (setDefaultMessage == true){
      this.setOperationStatus(ResponseStatusEnum.SUCCESS);
      this.setOperationMessage("Page " + (pg.getNumber()+ 1 ) + " of " + pg.getTotalPages() );
    }
  }

  public void setListStats(List list, boolean setDefaultMessage){
    //this.items             = list;
    this.first             = true;
    this.last              = true;
    this.itemsInPage       = list.size();
    this.totalItems        = list.size();
    this.totalPages        = 1;
    this.pageSize          = list.size();
    if (setDefaultMessage == true){
      this.setOperationStatus(ResponseStatusEnum.SUCCESS);
      this.setOperationMessage("Total " + list.size() + " items ");
    }
  }


}
