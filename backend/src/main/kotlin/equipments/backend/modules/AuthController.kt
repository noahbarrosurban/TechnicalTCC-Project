package equipments.backend.modules

import equipments.backend.config.JwtUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/login")
class AuthController {

    @Autowired
    private lateinit var authenticationManager: AuthenticationManager

    @Autowired
    private lateinit var jwtUtil: JwtUtil

    @PostMapping
    fun createAuthenticationToken(@RequestBody authRequest: AuthRequest): AuthResponse {
        val authentication: Authentication = authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(authRequest.username, authRequest.password)
        )
        SecurityContextHolder.getContext().authentication = authentication
        val jwt = jwtUtil.generateToken(authRequest.username)
        return AuthResponse(jwt)
    }
}

data class AuthRequest(val username: String, val password: String)
data class AuthResponse(val jwt: String) {
}