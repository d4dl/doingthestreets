package com.d4dl.dts.model;

import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.math.BigDecimal;

/**
 * Subclass to get id deleted updated created fields
 */
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Embeddable
@Data
public abstract class LocatableBaseEntity extends  BaseEntity implements Locatable {
    @Column(columnDefinition = "DECIMAL(11,8)")
    private BigDecimal longitude;
    @Column(columnDefinition = "DECIMAL(11,8)")
    private BigDecimal latitude;

    @Column(columnDefinition = "DECIMAL(11,8)")
    private BigDecimal lastSeenLongitude;
    @Column(columnDefinition = "DECIMAL(11,8)")
    private BigDecimal lastSeenLatitude;
}
