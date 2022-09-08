package com.waveway.parang.dto;

import com.waveway.parang.model.FishingTabooEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class FishingTabooDTO {

    private Long tabooId;
    private String species;
    private Date prohibitionStartDate;
    private Date prohibitionEndDate;
    private Long prohibitionBody;

    public FishingTabooDTO(final FishingTabooEntity entity){
        this.tabooId = entity.getTabooId();
        this.species = entity.getSpecies();
        this.prohibitionStartDate = entity.getProhibitionStartDate();
        this.prohibitionEndDate = entity.getProhibitionEndDate();
        this.prohibitionBody = entity.getProhibitionBody();
    }

    public static FishingTabooEntity toEntity(final FishingTabooDTO dto){
        return FishingTabooEntity.builder()
                .tabooId(dto.getTabooId())
                .species(dto.getSpecies())
                .prohibitionStartDate(dto.getProhibitionStartDate())
                .prohibitionEndDate(dto.getProhibitionEndDate())
                .prohibitionBody(dto.getProhibitionBody())
                .build();
    }
}
