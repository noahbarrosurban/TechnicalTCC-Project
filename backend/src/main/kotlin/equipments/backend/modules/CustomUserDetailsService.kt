package equipments.backend.modules

import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class CustomUserDetailsService : UserDetailsService {
    private val passwordEncoder = BCryptPasswordEncoder()
    private val encodedPassword = passwordEncoder.encode("password")

    override fun loadUserByUsername(username: String): UserDetails {
        // Aqui você deve buscar o usuário no banco de dados
        if (username == "user") {
            return User("user", encodedPassword, ArrayList())
        } else {
            throw UsernameNotFoundException("User not found")
        }
    }
}