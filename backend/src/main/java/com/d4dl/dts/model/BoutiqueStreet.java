package com.d4dl.dts.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

/**
 * A street with a bunch of touristy boutique shops on it.
 */
@Data
@Entity
public class BoutiqueStreet extends LocatableBaseEntity {

    @OneToMany(mappedBy = "street")
    private Set<Outfit> outfits;
}
