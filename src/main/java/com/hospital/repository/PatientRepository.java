package com.hospital.repository;

import com.hospital.models.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {
    public Iterable<Patient> findByCountry(String Country);
}
