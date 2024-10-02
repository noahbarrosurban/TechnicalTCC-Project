package equipments.backend.filter

import equipments.backend.config.JwtUtil
import equipments.backend.modules.CustomUserDetailsService
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter


@Component
class JwtRequestFilter : OncePerRequestFilter() {

    @Autowired
    private lateinit var customUserDetailsService: CustomUserDetailsService

    @Autowired
    private lateinit var jwtUtil: JwtUtil

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val authorizationHeader = request.getHeader("Authorization")
        println("Authorization Header: $authorizationHeader")

        var username: String? = null
            var jwt: String? = null

            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                jwt = authorizationHeader.substring(7)
                username = jwtUtil.extractAllClaims(jwt).subject
            }

        if (username != null && SecurityContextHolder.getContext().authentication == null) {
            val userDetails: UserDetails = customUserDetailsService.loadUserByUsername(username)

            if (jwtUtil.validateToken(jwt!!, userDetails.username)) {
                val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.authorities
                )
                usernamePasswordAuthenticationToken.details = WebAuthenticationDetailsSource().buildDetails(request)
                SecurityContextHolder.getContext().authentication = usernamePasswordAuthenticationToken
            }
        }
        chain.doFilter(request, response)
    }
}