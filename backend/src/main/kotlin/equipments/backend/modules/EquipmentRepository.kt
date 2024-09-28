package equipamentos.backend.repositories

import equipamentos.backend.Equipment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface EquipmentRepository : JpaRepository<Equipment, UUID>