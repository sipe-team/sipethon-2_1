package com.sipe.siperfume.entity

import jakarta.persistence.Entity
import jakarta.persistence.Id


// TODO : delete this class
@Entity
class TestEntity(
    @Id
    val id: Long,
    val name: String
) {
}