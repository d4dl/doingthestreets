package com.d4dl.dts.model;

import java.math.BigDecimal;

/**
 * Created by joshuadeford on 3/2/18.
 */

public interface Locatable {
   public BigDecimal getLongitude();
   public void setLongitude(BigDecimal longitude);

   public BigDecimal getLatitude();
   public void setLatitude(BigDecimal latitude);
}
