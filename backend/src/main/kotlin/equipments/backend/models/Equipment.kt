package equipments.backend.models

import jakarta.persistence.*
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import org.springframework.format.annotation.DateTimeFormat
import java.util.*

@Entity
@EntityListeners(AuditingEntityListener::class)
@Table(name = "equipments")
open class Equipment (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    val id: UUID? = null,

    @Column(name = "name")
    var name: String,

    @Column(name = "segment")
    var segment: String,

    @Column(name = "model")
    var model: String,

    @Column(name = "serial_number")
    var serialNumber: String,

    @Column(name = "status")
    var status: Boolean,

    @Column(name = "acquisition_date")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    var acquisitionDate: Date
)