package  com.axis

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import springfox.documentation.swagger2.annotations.EnableSwagger2
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.service.Contact
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket

@Configuration
@EnableSwagger2
class SwaggerConfiguration {

    @Bean
    open fun api(): Docket = Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.axis"))
            .paths(PathSelectors.any())
            .build()
            .apiInfo(apiDetails())

    fun apiDetails(): ApiInfo? {
        return ApiInfo(
                "Insurance API",
                "For testing and demo purpose.",
                "1.0",
                "Open",
                Contact("Sourabh Choubey", "url.com", "sf@df"),
                "API License",
                "https://opensource.com/", emptyList())
    }



}