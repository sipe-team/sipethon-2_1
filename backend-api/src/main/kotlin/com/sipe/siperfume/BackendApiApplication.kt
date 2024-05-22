package com.sipe.siperfume

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BackendApiApplication

fun main(args: Array<String>) {
    runApplication<BackendApiApplication>(*args)
}
