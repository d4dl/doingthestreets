package com.d4dl.dts.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * A bug that has a home Outfit and possibly a user
 */
@Data
@Entity
public class StreetBug extends LocatableBaseEntity {
    @ManyToOne
    private User possesser;

    @ManyToOne
    private Outfit home;

}
