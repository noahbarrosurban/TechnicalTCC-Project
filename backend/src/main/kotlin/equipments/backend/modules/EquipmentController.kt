package equipments.backend.modules

import equipments.backend.models.RequestEquipmentDTO
import equipments.backend.models.ResponseEquipmentDTO
import io.swagger.annotations.Api
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.springframework.web.bind.annotation.*
import java.util.*

@Api(value = "Equipment", description = "Equipment Controller")
@RestController
@RequestMapping("/equipment")
class EquipmentController(private val equipmentService: EquipmentService) {

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/create")
    @Operation(summary = "Create an equipment")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "OK"),
        ApiResponse(responseCode = "401", description = "Unauthorized"),
        ApiResponse(responseCode = "404", description = "Not Found")
    ])
    fun createEquipment(@RequestBody requestEquipmentDTO: RequestEquipmentDTO): ResponseEquipmentDTO {
        return equipmentService.create(requestEquipmentDTO)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/read")
    @Operation(summary = "Get all equipments")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "OK"),
        ApiResponse(responseCode = "401", description = "Unauthorized"),
        ApiResponse(responseCode = "404", description = "Not Found")
    ])
    fun getAllEquipments(): List<ResponseEquipmentDTO> {
        return equipmentService.findAll()
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/read/{id}")
    @Operation(summary = "Get equipment by id")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "OK"),
        ApiResponse(responseCode = "401", description = "Unauthorized"),
        ApiResponse(responseCode = "404", description = "Not Found")
    ])
    fun getEquipmentById(@PathVariable id: UUID): ResponseEquipmentDTO {
        return equipmentService.findById(id)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PutMapping("/update/{id}")
    @Operation(summary = "Update an equipment")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "OK"),
        ApiResponse(responseCode = "401", description = "Unauthorized"),
        ApiResponse(responseCode = "404", description = "Not Found")
    ])
    fun updateEquipment(@PathVariable id: UUID, @RequestBody requestEquipmentDTO: RequestEquipmentDTO): ResponseEquipmentDTO {
        return equipmentService.update(id, requestEquipmentDTO)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @DeleteMapping("/delete/{id}")
    @Operation(summary = "Delete an equipment")
    @ApiResponses(value = [
        ApiResponse(responseCode = "200", description = "OK"),
        ApiResponse(responseCode = "401", description = "Unauthorized"),
        ApiResponse(responseCode = "404", description = "Not Found")
    ])
    fun deleteEquipment(@PathVariable id: UUID) {
        equipmentService.delete(id)
    }
}