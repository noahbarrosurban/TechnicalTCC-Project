package equipments.backend.models

import com.fasterxml.jackson.annotation.JsonProperty
import equipments.backend.models.Equipment
import io.swagger.annotations.ApiModel
import org.springframework.format.annotation.DateTimeFormat
import java.util.*

@ApiModel(
    value = "ResponseEquipmentDTO",
    description = "Response Data Transfer Object for Equipment"
)
data class ResponseEquipmentDTO (
    @JsonProperty("id")
    val id: UUID,

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
) {
    constructor(equipment: Equipment) : this(
        id = equipment.id ?: UUID.randomUUID(),
        name = equipment.name,
        segment = equipment.segment,
        model = equipment.model,
        serialNumber = equipment.serialNumber,
        status = equipment.status,
        acquisitionDate = equipment.acquisitionDate
    )
}