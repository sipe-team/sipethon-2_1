package com.sipe.siperfume.common.response

import com.fasterxml.jackson.annotation.JsonInclude

data class BaseResponse<T> (
    val message: String,
    @JsonInclude(JsonInclude.Include.NON_NULL)
    val data: T? = null
) {
    companion object {
        fun <T> ok(message: String, data: T) = BaseResponse(message, data)
        fun <T> ok(message: String) = BaseResponse(message, null)
        fun <T> fail(message: String) = BaseResponse(message, null)
    }
}
