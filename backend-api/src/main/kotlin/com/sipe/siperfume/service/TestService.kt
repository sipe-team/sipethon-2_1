package com.sipe.siperfume.service

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional(readOnly = true)
class TestService {
    fun test(): String {
        return "test"
    }
}