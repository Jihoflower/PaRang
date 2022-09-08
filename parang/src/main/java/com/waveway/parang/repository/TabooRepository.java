package com.waveway.parang.repository;

import com.waveway.parang.model.FishingTabooEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TabooRepository extends JpaRepository<FishingTabooEntity,Long> {
    List<FishingTabooEntity> findByProhibitionStartDateBetweenAndProhibitionEndDate(Date prohibitionStartDate,Date prohibitionEndDate);
}
