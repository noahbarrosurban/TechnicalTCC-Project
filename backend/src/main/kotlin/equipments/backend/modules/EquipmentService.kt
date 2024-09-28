package equipments.backend.modules

import equipments.backend.models.RequestEquipmentDTO
import equipments.backend.models.ResponseEquipmentDTO
import equipments.backend.models.Equipment
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class EquipmentService(private val equipmentProvider: EquipmentProvider) {

    fun create(requestEquipmentDTO: RequestEquipmentDTO): ResponseEquipmentDTO {
        val equipment = Equipment(
            name = requestEquipmentDTO.name,
            segment = requestEquipmentDTO.segment,
            model = requestEquipmentDTO.model,
            serialNumber = requestEquipmentDTO.serialNumber,
            status = requestEquipmentDTO.status,
            acquisitionDate = requestEquipmentDTO.acquisitionDate
        )
        return ResponseEquipmentDTO(equipmentProvider.create(equipment))
    }

    fun findAll(): List<ResponseEquipmentDTO> {
        return equipmentProvider.findAll().map { ResponseEquipmentDTO(it) }
    }

    fun findById(id: UUID): ResponseEquipmentDTO {
        return ResponseEquipmentDTO(equipmentProvider.findById(id))
    }

    fun update(id: UUID, requestEquipmentDTO: RequestEquipmentDTO): ResponseEquipmentDTO {
        val existingEquipment = equipmentProvider.findById(id)
        existingEquipment.name = requestEquipmentDTO.name
        existingEquipment.segment = requestEquipmentDTO.segment
        existingEquipment.model = requestEquipmentDTO.model
        existingEquipment.serialNumber = requestEquipmentDTO.serialNumber
        existingEquipment.status = requestEquipmentDTO.status
        existingEquipment.acquisitionDate = requestEquipmentDTO.acquisitionDate
        return ResponseEquipmentDTO(equipmentProvider.update(id, existingEquipment))
    }

    fun delete(id: UUID) {
        equipmentProvider.delete(id)
    }
}