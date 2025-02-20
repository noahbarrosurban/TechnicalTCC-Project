package equipments.backend.modules

import equipments.backend.models.Equipment
import org.springframework.stereotype.Component
import java.util.*

@Component
class EquipmentProvider(private val equipmentRepository: EquipmentRepository) {

    fun create(equipment: Equipment): Equipment {
        return equipmentRepository.save(equipment)
    }

    fun findAll(): List<Equipment> {
        return equipmentRepository.findAll()
    }

    fun findById(id: UUID): Equipment {
        return equipmentRepository.findById(id).orElseThrow()
    }

    fun update(id: UUID, equipment: Equipment): Equipment {
        return equipmentRepository.save(equipment)
    }

    fun delete(id: UUID) {
        return equipmentRepository.deleteById(id)
    }
}