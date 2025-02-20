package equipments.backend.models

import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import org.springframework.format.annotation.DateTimeFormat
import java.util.*

@ApiModel(
    value = "RequestEquipmentDTO",
    description = "Request Data Transfer Object for Equipment"
)
data class RequestEquipmentDTO (
    @JsonProperty("name")
    val name: String,

    @JsonProperty("segment")
    val segment: String,

    @JsonProperty("model")
    val model: String,

    @JsonProperty("serial_number")
    val serialNumber: String,

    @JsonProperty("status")
    val status: Boolean,

    @JsonProperty("acquisition_date")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    val acquisitionDate: Date
)