package com.d4dl.dts.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

/**
 * A shop or other place of business.
 */
@Data
@Entity
public class Outfit extends LocatableBaseEntity {
    @OneToMany(mappedBy = "home")
    private Set<StreetBug> streetBugs;

    @ManyToOne
    private BoutiqueStreet street;
}
