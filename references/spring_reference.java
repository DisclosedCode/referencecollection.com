/*
 * Spring Reference
 *
 * Author: ReferenceCollection.com
 * Version: 1.0
 * License: MIT License
 * 
 * Table of Contents:
 * 1. Introduction
 * 2. Setting Up the environment
 * 3. Spring Core: Inversion of Control (IoC)
 *    3.1 Dependency Injection
 *    3.2 IoC Container
 * 4. Spring Beans
 *   4.1 Defining Beans
 *   4.2 Bean Scopes
 *   4.3 Bean Lifecycle
 * 5. Spring AOP
 *   5.1 What is AOP?
 *   5.2 Spring AOP vs. AspectJ
 *   5.3 Benefits of AOP
 *   5.4 AOP Concepts
 *   5.5 Types of Advice
 *   5.6 Aspect Ordering
 *   5.7 AOP Proxies
 * 6. Spring Data Access
 *   6.1 DataSource Configuration
 *   6.2 Spring JDBC
 *   6.3 Spring ORM
 *   6.4 Spring Data JPA
 * 7. Spring MVC
 * 8. Spring Boot
 * 9. Spring Security
 */

/**
 * 1. Introduction
 * 
 * Overview:
 * 
 * Spring is a comprehensive framework for building enterprise-level applications
 * in Java. It simplifies development with features like dependency injection,
 * aspect-oriented programming, and declarative transaction management.
 * 
 * Key features of Spring:
 * - Lightweight and modular design
 * - Inversion of Control (IoC) container
 * - Aspect-Oriented Programming (AOP) support
 * - Declarative transaction management
 * - Integration with various persistence technologies
 * - MVC web framework
 * - Excellent testing support
 * 
 * 
 * History:
 * 
 * Created by Rod Johnson in 2003, Spring started as a lightweight alternative to
 * traditional Java EE. Over the years, it evolved into a full-fledged framework
 * with extensive support for web applications, data access, messaging, and more.
 * 
 */

/**
 * 2. Setting Up the environment
 * 
 * Setting up a proper development environment is crucial for developing 
 * Spring applications. This involves installing the Java Development Kit (JDK), 
 * setting up an Integrated Development Environment (IDE), integrating build 
 * tools like Maven or Gradle, and using Spring Initializr to bootstrap your project.
 * 
 * Steps to Set Up:
 * 
 * 2.1 Installing JDK:
 *    - The JDK is necessary for compiling and running Java applications.
 *    - Ensure compatibility with Spring by installing a supported version.
 *    - Download the JDK from Oracle or OpenJDK, set the JAVA_HOME environment variable, 
 *      and verify the installation with 'java -version' and 'javac -version'.
 * 
 * 2.2. Installing an IDE:
 *    - Commonly used IDEs for Spring development include IntelliJ IDEA, Eclipse, and VS Code.
 *    - IntelliJ IDEA is preferred for its comprehensive support for Spring projects.
 *    - After installation, configure the IDE to use the installed JDK and explore Spring-specific features.
 * 
 * 2.3 Maven/Gradle Integration:
 *    - Maven and Gradle manage dependencies, compile code, and automate the build process.
 *    - Maven uses an XML-based configuration (pom.xml), while Gradle uses a Groovy/Kotlin-based DSL (build.gradle).
 *    - Integrate either tool in your project by adding necessary dependencies and using IDE plugins.
 * 
 * 2.4 Using Spring Initializr:
 *    - Spring Initializr is a tool for generating Spring Boot projects with custom configurations.
 *    - Select the project type (Maven or Gradle), dependencies, and other settings, then generate the project.
 *    - Import the generated project into your IDE and start building your Spring application.
 */

/**
 * 3. Spring Core: Inversion of Control (IoC)
 * 
 * Inversion of Control (IoC) is a design principle in which the control of object creation
 * and lifecycle management is transferred from the application code to the Spring container IoC.
 * This principle is typically achieved using Dependency Injection (DI) or Service Locator pattern.
 *
 * Benefits of IoC:
 * - Decoupling: Minimizes component dependencies.
 * - Testing: Eases unit testing with mock injections.
 * - Maintainability: Centralizes configuration for easier updates.
 * - Configurability: Changes can be made without code alterations.
 * - Flexibility: Supports dynamic runtime configurations.
 * - Reusability: Encourages component reuse.
 */

/**
 * 3.1 Dependency Injection (DI)
 * 
 * DI is a pattern used to implement IoC, where the container injects dependencies into objects.
 * 
 * There are three types of dependency injection in Spring:
 * - Constructor Injection
 * - Setter Injection
 * - Field Injection (not recommended for production code)
 * 
 * Autowiring allows Spring to resolve and inject collaborating beans automatically.
 * It can be done by type, name, constructor, or no autowiring
 */

@Component
class UserService {
    private final UserRepository userRepository;

    // Constructor Injection
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private EmailService emailService;

    // Setter Injection
    @Autowired
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }

    // Field Injection (not recommended)
    @Autowired
    private LoggingService loggingService;
}

/**
 * 3.2 IoC Container
 * 
 * The IoC container is responsible for managing the objects of an application. It creates these objects,
 * wires them together, configures them, and manages their complete lifecycle from creation till destruction.
 * 
 * The main interfaces of the IoC container are:
 * - BeanFactory: Lightweight container that provides basic support for DI.
 * - ApplicationContext: More feature-rich container that builds on top of BeanFactory.
 */

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class IoCExample {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyBean myBean = context.getBean(MyBean.class);
        myBean.doSomething();
    }
}

/**
 * 4 Spring Beans
 * 
 * Bean is an object that is instantiated, assembled, and managed by the Spring IoC container.
 * Beans are the building blocks of a Spring application, representing the core of the 
 * application's business logic.
 * 
 * Key concepts:
 * - Bean Definition: Configuration metadata that defines how beans are created.
 * - Bean Scope: Defines the lifecycle of a bean.
 * - Bean Initialization: Process of creating and setting up beans.
 * - Bean Dependency Injection: Beans can have dependencies on other beans.
 * 
 * @Primary: Specifies a preferred bean when multiple candidates are available for autowiring.
 * @Lazy: Delays the initialization of a bean until it is first requested
 */

/**
 * 4.1 Defining Beans
 * 
 * Spring provides several ways to define beans:
 * - XML Configuration: Traditional way of defining beans in an XML file.
 * - Java-based Configuration: Using @Configuration and @Bean annotations.
 * - Annotation-Based Configuration: Automatically detects and registers beans using @Component, @Service, etc.
 * 
 * Spring allows mixing different configuration styles. You can use XML as the primary configuration
 * and import Java-based or annotation-based configurations
 */

/**
 * XML-based configuration:
 * Less common in modern Spring apps, XML configuration was the original way to configure Spring applications
 * 
 * <?xml version="1.0" encoding="UTF-8"?>
 * <beans xmlns="http://www.springframework.org/schema/beans"
 *        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *        xsi:schemaLocation="http://www.springframework.org/schema/beans
 *                            http://www.springframework.org/schema/beans/spring-beans.xsd">
 *
 *     <bean id="userService" class="com.example.UserService">
 *         <constructor-arg ref="userRepository"/>
 *     </bean>
 *     <bean id="userRepository" class="com.example.UserRepository"/>
 * </beans>
 */

/**
 * Java-based configuration:
 * Allows you to configure your Spring application using Java classes instead of XML.
 * 
 * Key annotations:
 * - @Configuration: Indicates that a class declares one or more @Bean methods
 * - @Bean: Indicates that a method produces a bean to be managed by the Spring container
 */

@Configuration
public class JavaConfig {
    @Bean
    public MyBean myBean() {
        return new MyBean("Spring");
    }

    @Bean
    public AnotherBean anotherBean(MyBean myBean) {
        return new AnotherBean(myBean);
    }
}

/**
 * Annotation-based configuration:
 * Most common way to define a Bean is through annotations, which reduces XML configuration:
 * - @Component, @Service, @Repository, @Controller: Mark classes as Spring-managed components
 * - @Autowired: Inject dependencies automatically
 * - @Qualifier: Specify which exact bean should be wired when there are multiple options
 */

@Service
public class ExampleService {
    private final ExampleRepository repository;

    @Autowired
    public ExampleService(ExampleRepository repository) {
        this.repository = repository;
    }
}


/**
 * 4.2 Bean Scopes
 * 
 * Spring supports several bean scopes that define the lifecycle and visibility of beans.
 * - Singleton (default): One instance per Spring IoC container
 * - Prototype: New instance created for each request
 * - Request: One instance per HTTP request (Web application context)
 * - Session: One instance per HTTP session (Web application context)
 * - Application: One instance per ServletContext (Web application context)
 * - Websocket: One instance per WebSocket session (Web application context)
 */

@Component
@Scope("prototype")
class PrototypeBean {
    // This bean will be created each time it's requested
}

/**
 * 4.3 Bean Lifecycle
 * 
 * Spring manages the lifecycle of beans, from instantiation to destruction.
 * You can hook into this lifecycle using initialization and destruction callbacks.
 * 
 * The main stages of the Spring Beans lifecycle are:
 * - 1. Bean Instantiation: Container creates the bean instance.
 * - 2. Dependency Injection: Dependencies are injected into the bean.
 * - 3. Bean Post-Processing: Uses BeanPostProcessor for custom logic before and after initialization
 * - 4. Initialization Callbacks: 
 *      @PostConstruct: Called after dependency injection.
 *      InitializingBean: afterPropertiesSet() is called next.
 *      Custom Init Method: Configured via initMethod if specified
 * - 5. Destruction Callbacks:
 *      @PreDestroy: Called before bean destruction.
 *      DisposableBean: destroy() is called next.
 *      Custom Destroy Method: Configured via destroyMethod if specified.
 */

@Component
public class LifecycleBean implements InitializingBean, DisposableBean {
    
    public LifecycleBean() {
        System.out.println("1. Bean instantiated");
    }

    @Autowired
    public void setDependency(SomeDependency dependency) {
        System.out.println("2. Dependencies injected");
    }

    @PostConstruct
    public void postConstruct() {
        System.out.println("3. PostConstruct method called");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("4. InitializingBean's afterPropertiesSet method called");
    }

    // Custom initialization method should be declared in @Bean config using initMethod
    public void customInit() {
        System.out.println("5. Custom init method called");
    }

    @PreDestroy
    public void preDestroy() {
        System.out.println("6. PreDestroy method called");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("7. DisposableBean's destroy method called");
    }

    // Custom destroy method should be declared in @Bean config using destroyMethod
    public void customDestroy() {
        System.out.println("8. Custom destroy method called");
    }
}

@Configuration
public class BeanLifecycleDemo {

    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")
    public LifecycleBean lifecycleBean() {
        return new LifecycleBean();
    }
}

/**
 * 5. Spring AOP
 * 
 * 5.1 What is AOP?
 * 
 * Spring AOP allows you to add cross-cutting concerns like logging, security, and
 * transaction management across your application without tangling your business logic.
 * AOP is useful for separating concerns that cut across multiple classes or methods.
 * 
 * 5.2 Spring AOP vs. AspectJ
 * 
 * Spring AOP is a proxy-based framework, while AspectJ is a more powerful and complete AOP solution
 * that uses bytecode weaving.
 *
 * - Spring AOP:
 *   - Proxy-based: Can only apply aspects to public methods.
 *   - Runtime weaving: Aspects are woven at runtime.
 *   - Easier to configure and use with Spring.
 *
 * - AspectJ:
 *   - Compile-time, post-compile, and load-time weaving.
 *   - Can apply aspects to any join point (e.g., constructors, field access).
 *   - More powerful, but with a steeper learning curve.
 * 
 * 5.3 Benefits of AOP
 * 
 * - Improved modularity: Cross-cutting concerns are centralized in aspects.
 * - Cleaner code: Business logic is not cluttered with cross-cutting concerns.
 * - Easy maintenance: Changes to cross-cutting concerns can be made in one place.
 * - Reusability: Aspects can be applied to multiple parts of an application.
 * - Flexibility: Behavior can be added or removed without modifying existing code.
 * 
 * 5.4 AOP Concepts:
 * 
 * - Aspect: A modularization of a concern that cuts across multiple classes.
 * - Join Point: A point during the execution of a program, such as a method execution.
 * - Advice: The action taken by an aspect at a particular join point.
 * - Pointcut: A predicate that matches join points (where advice should be applied).
 * - Introduction: Adding new methods or fields to existing classes.
 * - Weaving: Linking aspects with other application types to create an advised object.
 * 
 * 5.5 Types of advice:
 * 
 * - @Before: Executes before the method execution.
 * - @After: Executes after the method execution.
 * - @AfterReturning: Executes after the method execution, only if it completes successfully.
 * - @AfterThrowing: Executes if the method exits by throwing an exception.
 * - @Around: Executes before and after the method execution.
 */

// Define an Aspect for logging
@Aspect
@Component
public class LoggingAspect {

    // Pointcut to match all methods in the target class
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {}

    // Advice to run before the matched methods
    @Before("serviceMethods()")
    public void logBefore() {
        System.out.println("LoggingAspect: Method execution started...");
    }

    // Advice to run after the matched methods
    @After("serviceMethods()")
    public void logAfter() {
        System.out.println("LoggingAspect: Method execution completed.");
    }

    // Advice to run around the matched methods
    @Around("serviceMethods()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("LoggingAspect: Before method execution");
        Object result = joinPoint.proceed(); // Proceed with method execution
        System.out.println("LoggingAspect: After method execution");
        return result;
    }
}

/**
 * 5.6 Aspect Ordering
 * 
 * When multiple aspects apply to the same join point, you can control their order using 
 * the @Order annotation
 */


@Aspect
@Order(1)
@Component
public class SecurityAspect {
    // Security check logic
}

@Aspect
@Order(2)
@Component
public class LoggingAspect {
    // Logging logic
}

/**
 * 5.7 AOP Proxies
 * 
 * Spring AOP uses either JDK dynamic proxies or CGLIB proxies:
 * - JDK dynamic proxies: Used when the target object implements an interface.
 * - CGLIB proxies: Used when the target object doesn't implement an interface.
 * 
 * Spring AOP is commonly configured using annotations.
 * 
 * @EnableAspectJAutoProxy: Enables support for handling components marked with `@Aspect`.
 * 
 * You can force the use of CGLIB proxies by setting proxyTargetClass = true in XML or Java configuration
 */

@Configuration
@EnableAspectJAutoProxy()
class AopProxyConfig {
    // Configuration to force CGLIB proxies
}

/**
 * 6. Spring Data Access
 * 
 * Spring Data Access provides a consistent and simplified approach 
 * to handling database operations in Java applications. By abstracting 
 * the complexities of data access, Spring allows developers to focus on 
 * business logic while ensuring efficient interaction with the database.
 *
 * Key Components:
 * - Spring JDBC: Provides easy access to relational databases using JDBC.
 * - Spring ORM: Integrates with ORM frameworks like Hibernate and JPA.
 * - Spring Data: Simplifies the creation of repositories with minimal boilerplate.
 * 
 * Key Features and Benefits
 * - Reduces boilerplate code
 * - Provides exception translation
 * - Simplifies transaction management
 * - Offers integration with various data access technologies
 */

/**
 * 6.1 DataSource Configuration
 * 
 * A DataSource is a factory for connections to the physical data source 
 * that your application requires. In Spring, you can define a DataSource 
 * using Java configuration or XML configuration
 */

@Configuration
public class DatabaseConfig {
    
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/exampledb");
        dataSource.setUsername("root");
        dataSource.setPassword("password");
        return dataSource;
    }
}

/**
 * 6.2 Spring JDBC (Java Database Connectivity)
 * 
 * Spring JDBC simplifies database access by removing boilerplate code 
 * associated with JDBC. It offers JdbcTemplate, NamedParameterJdbcTemplate, 
 * SimpleJdbcInsert, and SimpleJdbcCall to make database operations 
 * more manageable.
 */

/**
 * JdbcTemplate
 * 
 * JdbcTemplate simplifies the use of JDBC and helps to avoid common errors.
 */

@Repository
public class UserDao {
    
    private final JdbcTemplate jdbcTemplate;
    
    public UserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    public void createUser(String username, String email) {
        String sql = "INSERT INTO users (username, email) VALUES (?, ?)";
        jdbcTemplate.update(sql, username, email);
    }
    
    public User getUser(Long id) {
        String sql = "SELECT * FROM users WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, (rs, rowNum) ->
            new User(
                rs.getLong("id"),
                rs.getString("username"),
                rs.getString("email")
            )
        );
    }
}

/**
 * NamedParameterJdbcTemplate
 * 
 * NamedParameterJdbcTemplate allows you to use named parameters in your SQL queries
 * instead of the traditional "?" placeholders.
 */

@Repository
public class AdvancedUserDao {
    
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    
    public AdvancedUserDao(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }
    
    public void updateUser(Long id, String newEmail) {
        String sql = "UPDATE users SET email = :email WHERE id = :id";
        MapSqlParameterSource params = new MapSqlParameterSource()
            .addValue("id", id)
            .addValue("email", newEmail);
        namedParameterJdbcTemplate.update(sql, params);
    }
}

/**
 * SimpleJdbcInsert and SimpleJdbcCall
 * 
 * SimpleJdbcInsert and SimpleJdbcCall simplify database insert operations and
 * stored procedure calls, respectively.
 */

@Repository
public class SimpleUserDao {
    
    private final SimpleJdbcInsert simpleJdbcInsert;
    
    public SimpleUserDao(DataSource dataSource) {
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource)
            .withTableName("users")
            .usingGeneratedKeyColumns("id");
    }
    
    public Long insertUser(String username, String email) {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("username", username);
        parameters.put("email", email);
        return simpleJdbcInsert.executeAndReturnKey(parameters).longValue();
    }
}

/**
 * JDBC batch operations
 * 
 * Batch operations allow you to execute multiple SQL statements in a single database call, 
 * which can significantly improve performance for large data sets.
 * 
 * Example:
 */
public class BatchUserDao {
    private JdbcTemplate jdbcTemplate;

    public BatchUserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void batchCreateUsers(List<User> users) {
        String sql = "INSERT INTO users (username, email) VALUES (?, ?)";
        
        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                User user = users.get(i);
                ps.setString(1, user.getUsername());
                ps.setString(2, user.getEmail());
            }

            @Override
            public int getBatchSize() {
                return users.size();
            }
        });
    }
}

/**
 * 6.3 Spring ORM (Object-Relational Mapping)
 * 
 * Spring ORM module provides integration layers with popular ORM frameworks 
 * like Hibernate, JPA, and JDO. It lets you query and manipulate data from a database 
 * using an object-oriented paradigm.
 */

/**
 * Integrating with Hibernate
 * 
 * Spring's LocalSessionFactoryBean is used to create a Hibernate SessionFactory. It is typically
 * defined in a configuration class or an XML configuration file.
 */

@Configuration
public class HibernateConfig {

    @Bean
    public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setPackagesToScan("com.example.myapp.model");
        sessionFactory.setHibernateProperties(hibernateProperties());
        return sessionFactory;
    }

    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
        return new HibernateTransactionManager(sessionFactory);
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
        properties.setProperty("hibernate.show_sql", "true");
        return properties;
    }
}

@Autowired
private SessionFactory sessionFactory;

public void saveUser(User user) {
    Session session = sessionFactory.getCurrentSession();
    session.save(user);
}

/**
 * Spring Data JPA
 * 
 * Spring Data JPA builds on top of JPA and provides a repository abstraction that reduces 
 * the boilerplate code for data access. It enables the implementation of CRUD operations and 
 * complex queries through simple method naming conventions
 */

/**
 * Configuring Spring Data JPA
 * 
 * Java Persistence API (JPA) is a standard for ORM in Java. Spring simplifies 
 * JPA configuration and provides integration with Hibernate and other JPA 
 * implementations
 */

@Configuration
public class JpaConfig {

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        em.setPackagesToScan("com.example.model");
        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        em.setJpaProperties(hibernateProperties());
        return em;
    }

    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        properties.put("hibernate.show_sql", "true");
        properties.put("hibernate.hbm2ddl.auto", "update");
        return properties;
    }
}

/**
 * Defining Entities
 *
 * Entities represent the database tables in your application. 
 * We'll define a simple User entity.
 */

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    public User() {
    }

    // Getters and Setters
}

/**
 * Spring Data Repositories
 *
 * Spring Data JPA repositories provide CRUD operations out of the box.
 * We'll create a repository for the User entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom query methods can be defined here if needed
    User findByEmail(String email);
}

/**
 * Service Layer and Transaction Management
 *
 * The service layer contains the business logic of your application. 
 * It interacts with the repository to perform data access operations.
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User createUser(String name, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Transactional(readOnly = true)
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

/** 
 * JPQL and Native Queries
 * 
 * JPQL (Java Persistence Query Language) is a powerful query language that operates on 
 * entities rather than tables. Spring Data JPA allows you to use JPQL and native SQL queries
 * in your repository methods.
 */

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.name = :name")
    List<User> findUsersByName(@Param("name") String name);

    @Query(value = "SELECT * FROM users WHERE name = :name", nativeQuery = true)
    List<User> findUsersByNameNative(@Param("name") String name);
}

/**
 * Advanced Features (Auditing, Paging, and Sorting)
 * 
 * Spring Data JPA offers advanced features such as auditing, paging, and sorting out of the box.
 */

@Configuration
@EnableJpaAuditing
public class JpaConfig {
}

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable<U> {

    @CreatedBy
    protected U createdBy;

    @LastModifiedBy
    protected U lastModifiedBy;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected Date createdDate;

    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected Date lastModifiedDate;

    // Getters and Setters
}

/*
 * Example: Paging and Sorting
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Page<User> findUsersWithPagingAndSorting(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        return userRepository.findAll(pageable);
    }
}

/**
 * 7. Spring MVC
 * 
 * Spring Web MVC is a part of the Spring Framework that helps in building 
 * robust web applications. It follows the Model-View-Controller design pattern.
 * 
 * - Model: Represents the application's data.
 * - View: Renders the model data.
 * - Controller: Handles user input and updates the model.
 * 
 * Why Spring MVC?
 * - Separation of concerns.
 * - Powerful, flexible configuration.
 * - Integration with other Spring modules (e.g., Spring Security, Spring Data).
 * - Annotation-based configuration.
 */

/**
 * Spring MVC Architecture
 * 
 * The core components of Spring MVC architecture are:
 * 
 * 1. DispatcherServlet: Front controller that handles all HTTP requests and responses
 * 2. HandlerMapping: Maps requests to handlers
 * 3. Controller: Handles the request and returns a model and view name
 * 4. ViewResolver: Resolves view names to actual View implementations
 * 5. View: Renders the model data
 * 
 * Here's a high-level overview of how Spring MVC works:
 *
 * 1. The client sends a request to the server.
 * 2. The DispatcherServlet receives the request.
 * 3. The DispatcherServlet consults the HandlerMapping to identify the appropriate Controller.
 * 4. The Controller processes the request and returns a ModelAndView object.
 * 5. The ViewResolver interprets the view name returned by the Controller.
 * 6. The View is rendered and sent back to the client.
 */

/**
 * Setting Up Spring MVC
 * 
 * To set up a Spring MVC project, you need to configure your build tool (e.g., Maven or Gradle)
 * and set up the basic project structure
 * 
 * Maven dependencies for a Spring MVC project:
 * <dependencies>
 *     <dependency>
 *         <groupId>org.springframework</groupId>
 *         <artifactId>spring-webmvc</artifactId>
 *         <version>5.3.9</version>
 *     </dependency>
 *     <dependency>
 *         <groupId>javax.servlet</groupId>
 *         <artifactId>javax.servlet-api</artifactId>
 *         <version>4.0.1</version>
 *         <scope>provided</scope>
 *     </dependency>
 * </dependencies>
 */

/**
 * Basic Project Structure
 * 
 * A typical Spring MVC project structure looks like this
 * 
 * src/
 * ├── main/
 * │   ├── java/
 * │   │   └── com/
 * │   │       └── example/
 * │   │           ├── config/
 * │   │           ├── controller/
 * │   │           ├── model/
 * │   │           └── service/
 * │   ├── resources/
 * │   └── webapp/
 * │       ├── WEB-INF/
 * │       │   ├── views/
 * │       │   └── web.xml
 * │       └── resources/
 * └── test/
 *     └── java/
 */

/**
 * Spring MVC Core Concepts
 *
 * DispatcherServlet
 * 
 * The DispatcherServlet is the front controller in Spring MVC. It's responsible for
 * handling all incoming requests and dispatching them to the appropriate handlers.
 *
 * Configuration in web.xml:
 *
 * <servlet>
 *     <servlet-name>dispatcher</servlet-name>
 *     <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
 *     <load-on-startup>1</load-on-startup>
 * </servlet>
 *
 * <servlet-mapping>
 *     <servlet-name>dispatcher</servlet-name>
 *     <url-pattern>/</url-pattern>
 * </servlet-mapping>
 */

/** 
 * Controllers
 * 
 * Controllers handle requests and return responses. They are typically annotated with @Controller.
 */

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public String hello() {
        return "hello";
    }
}

/**
 * RequestMapping
 * 
 * @RequestMapping is used to map web requests to specific handler classes and/or handler methods.
 */

@Controller
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id) {
        // Method implementation
    }

    @PostMapping
    public String createUser(@RequestBody User user) {
        // Method implementation
    }
}

/**
 * ViewResolver
 * 
 * ViewResolver is responsible for resolving logical view names to actual View objects.
 */

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
public class WebConfig {

    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
}

/**
 * Model and ModelAndView
 * 
 * Model is used to pass data from controller to view. ModelAndView combines both
 * the model and the logical view name.
 */
@Controller
public class UserController {

    @GetMapping("/users")
    public ModelAndView listUsers() {
        List<User> users = userService.getAllUsers();
        return new ModelAndView("userList", "users", users);
    }

    @GetMapping("/user/{id}")
    public String getUser(@PathVariable Long id, Model model) {
        User user = userService.getUser(id);
        model.addAttribute("user", user);
        return "userDetails";
    }
}

/**
 * Request Handling
 *
 * Handler Methods
 * Handler methods are the methods in your controller that process requests.
 *
 * Request Parameters
 * @RequestParam is used to bind request parameters to method parameters.
 */

@GetMapping("/search")
public String search(@RequestParam String query) {
    // Search logic here
    return "searchResults";
}

/**
 * Path Variables
 * 
 * @PathVariable is used to extract values from the URI path.
 */

@GetMapping("/users/{id}")
public String getUser(@PathVariable Long id) {
    // User retrieval logic here
    return "userDetails";
}

/**
 * Request Body
 * 
 * @RequestBody is used to bind the HTTP request body to a domain object.
 */

@PostMapping("/users")
public ResponseEntity<User> createUser(@RequestBody User user) {
    // User creation logic here
    return ResponseEntity.ok(user);
}

/**
 * HTTP Methods (GET, POST, PUT, DELETE)
 * 
 * Spring MVC supports all HTTP methods through specific annotations.
 */

@GetMapping("/users")
public List<User> getAllUsers() {
    // Retrieve all users
}

@PostMapping("/users")
public User createUser(@RequestBody User user) {
    // Create a new user
}

@PutMapping("/users/{id}")
public User updateUser(@PathVariable Long id, @RequestBody User user) {
    // Update an existing user
}

@DeleteMapping("/users/{id}")
public void deleteUser(@PathVariable Long id) {
    // Delete a user
}

/**
 * Form Handling
 * 
 * Spring MVC provides built-in support for form handling. 
 * It integrates well with the data binding and validation features of Spring.
 */

@Controller
@RequestMapping("/form")
public class FormController {

    @GetMapping("/register")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "registerForm"; // View name 'registerForm' will be resolved to 'registerForm.jsp'
    }

    @PostMapping("/register")
    public String submitForm(@Validated @ModelAttribute("user") User user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "registerForm"; // Return the same form if validation fails
        }
        userService.save(user);
        return "redirect:/form/success";
    }

    @GetMapping("/success")
    public String showSuccess() {
        return "success"; // View name 'success' will be resolved to 'success.jsp'
    }
}

/**
 * Data Binding
 * 
 * Spring supports JSR-303 (Bean Validation) annotations for validation.
 */
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class User {

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Please provide a valid email address")
    private String email;

    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;

    // Getters and setters
}

/**
 * Validation
 * 
 * Spring supports JSR-303 Bean Validation API.
 */
import javax.validation.Valid;
import org.springframework.validation.BindingResult;

@Controller
public class UserValidationController {
    
    @PostMapping("/validateUser")
    public String validateUser(@Valid @ModelAttribute("user") User user, BindingResult result) {
        if (result.hasErrors()) {
            return "userForm";
        }
        // Process the valid user
        return "userSuccess";
    }
}

/**
 * Custom Validation
 */

@Documented
@Constraint(validatedBy = AgeValidator.class)
@Target({ ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidAge {
    String message() default "Invalid age";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

public class AgeValidator implements ConstraintValidator<ValidAge, Integer> {

    @Override
    public void initialize(ValidAge age) {
    }

    @Override
    public boolean isValid(Integer age, ConstraintValidatorContext context) {
        return age != null && age >= 18 && age <= 100;
    }
}

public class User {

    @NotEmpty(message = "Name is required")
    private String name;

    @ValidAge
    private int age;
}


// 6. View Technologies

/**
 * 6.1 JSP and JSTL
 * 
 * JavaServer Pages (JSP) and JavaServer Pages Standard Tag Library (JSTL) are commonly used view technologies.
 */
/*
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
    <h2>User List</h2>
    <c:forEach items="${users}" var="user">
        <p>${user.name} - ${user.email}</p>
    </c:forEach>
</body>
</html>
*/

/**
 * 6.2 Thymeleaf
 * 
 * Thymeleaf is a modern server-side Java template engine.
 */
/*
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>User List</title>
</head>
<body>
    <h2>User List</h2>
    <div th:each="user : ${users}">
        <p th:text="${user.name + ' - ' + user.email}"></p>
    </div>
</body>
</html>
*/

/**
 * 6.3 FreeMarker
 * 
 * FreeMarker is another popular template engine.
 */
/*
<#-- FreeMarker template -->
<html>
<body>
    <h2>User List</h2>
    <#list users as user>
        <p>${user.name} - ${user.email}</p>
    </#list>
</body>
</html>
*/

/**
 * Interceptors and Filters
 * 
 * HandlerInterceptor allows you to intercept requests before they reach the controller
 * and after the controller has processed them
 */

public class LoggingInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("Request URL: " + request.getRequestURL());
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("Response Status: " + response.getStatus());
    }
}

/**
 * Register the interceptor in your WebConfig:
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoggingInterceptor());
    }
}

/**
 * Filter
 * 
 * Filters are part of the Java Servlet specification and can be used to intercept and process
 * requests and responses.
 */
import javax.servlet.*;
import java.io.IOException;

public class EncodingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        chain.doFilter(request, response);
    }
}

/**
 * Register the filter in your web.xml or using a FilterRegistrationBean:
 */
@Bean
public FilterRegistrationBean<EncodingFilter> encodingFilterRegistration() {
    FilterRegistrationBean<EncodingFilter> registration = new FilterRegistrationBean<>();
    registration.setFilter(new EncodingFilter());
    registration.addUrlPatterns("/*");
    return registration;
}

/**
 * Spring boot
 * 
 * Spring Boot is used to create stand-alone, providing convention over configuration. It eliminates 
 * the need for extensive boilerplate code, XML configurations, and manual dependency management, making 
 * it easier to build production-ready applications
 * 
 * Benefits of Using Spring Boot:
 * - Automatic configuration
 * - Embedded servers (e.g., Tomcat)
 * - Production-ready features like monitoring and metrics
 * - Ideal for microservices 
 */

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

/**
 * Maven Configuration
 * 
 * <dependencies>
 *     <dependency>
 *         <groupId>org.springframework.boot</groupId>
 *         <artifactId>spring-boot-starter-web</artifactId>
 *     </dependency>
 * </dependencies>
 */

/**
 * Spring Boot Starters
 * 
 * Spring Boot starters are a set of pre-configured dependencies that simplify the inclusion of common libraries
 * and frameworks in your project.
 * Some of the commonly used starters include:
 * - spring-boot-starter-web: Used for building web applications.
 * - spring-boot-starter-data-jpa: Provides support for JPA and Hibernate.
 * - spring-boot-starter-security: Adds Spring Security for authentication and authorization.
 * - spring-boot-starter-actuator: Includes monitoring and management features.
 */

/**
 * Auto-Configuration
 * Spring Boot's auto-configuration mechanism automatically configures the application based 
 * on the dependencies on the classpath and certain properties. This reduces the amount of boilerplate
 * configuration required.
 */

/**
 * Externalized Configuration
 * 
 */

/** 
 * Externalized Configuration
 * 
 * Spring Boot allows you to externalize your application's configuration, 
 * making it easier to manage different environments
 * (e.g., development, staging, production).
 * 
 * This is typically done through `application.properties` or `application.yml` files
 * 
 * Example (application.properties):
 * app.name=My Spring Boot Application
 * server.port=8080
 * spring.datasource.url=jdbc:h2:mem:testdb
 * spring.datasource.username=sa
 * spring.datasource.password=
 * 
 * You can access these properties in your code using the `@Value` annotation
 */ 

@Component
public class AppConfig {

    @Value("${app.name}")
    private String appName;

    public String getAppName() {
        return appName;
    }
}

/**
 * Profile-Specific Properties
 * 
 * Spring Boot allows you to define profile-specific properties to handle different environments such as 
 * You can define properties for a specific profile in files like 
 * application-dev.properties or application-prod.yml
 * 
 * You can activate a specific profile using the `spring.profiles.active` property
 */

/**
 * spring.profiles.active=dev
 */

/**
 * Spring Boot Actuator
 * 
 * Actuator provides production-ready features such as monitoring and managing your application.
 * Actuator exposes various endpoints (e.g., `/actuator/health`, `/actuator/metrics`) that allow you to monitor 
 * the state of your application.
 * 
 * Actuator endpoints can provide useful information, such as application health, metrics, environment properties,
 * and more. These endpoints are customizable and can be secured using Spring Security.
 * 
 * You can configure which Actuator endpoints are exposed in (application.properties)
 * management.endpoints.web.exposure.include=health,info
 * 
 * Check application health by visiting /actuator/health in your browser
 * 
 * Enable or disable endpoints:
 * management.endpoint.health.enabled=false
 */

/** 
 * Custom Actuator Endpoint
 * 
 * You can customize the behavior of Actuator endpoints by defining beans of type `Endpoint`
 */

@Component
@Endpoint(id = "custom")
public class CustomEndpoint {
    @ReadOperation
    public String customEndpoint() {
        return "Custom Endpoint";
    }
}
/**
 * Spring Boot Testing
 * 
 * Spring Boot provides excellent support for testing. It includes tools to easily create and 
 * run tests for your applications, leveraging JUnit, Mockito, and other popular testing frameworks
 * 
 * The `@SpringBootTest` annotation is commonly used to load the entire Spring context for integration testing
 * You can also use `@WebMvcTest` for testing web layers, or `@DataJpaTest` for testing JPA repositories.
 */

@SpringBootTest
@ActiveProfiles("test")
class DemoApplicationTestsWithProfile {

    @Test
    void contextLoads() {
    
    }
}

/**
 * Mocking with Mockito
 * 
 * Use @MockBean to mock dependencies in your tests:
 */

@SpringBootTest
public class MyServiceTests {

    @MockBean
    private MyRepository myRepository;

    @Test
    void testServiceMethod() {
        when(myRepository.findById(1L)).thenReturn(Optional.of(new MyEntity()));
        // Test service logic
    }
}

/**
 * Spring Security
 * 
 * Spring Security is a powerful and highly customizable security framework for Java applications. 
 * It provides comprehensive security solutions for web applications, including authentication, authorization, 
 * and protection against common web application vulnerabilities.
 *  
 * Key features of Spring Security:
 * - Authentication: Secure user login and session management.
 * - Authorization: Granular access control to application resources.
 * - Protection against common web application attacks: CSRF, XSS, session fixation, etc.
 * - Integration with various authentication providers: LDAP, OAuth2, SAML, etc.
 * - Flexible configuration and customization options.

 */

/**
 * Setting up a Spring Security
 * 
 * To use Spring Security in a Spring application, you need to add the necessary dependencies 
 * to your project's build configuration. In a Maven-based project, 
 * 
 * you can add the following dependency:
 *
 * <dependency>
 *     <groupId>org.springframework.boot</groupId>
 *     <artifactId>spring-boot-starter-security</artifactId>
 * </dependency>
 */

/**
 * Configuring Basic Security
 *
 * Spring Security provides a set of default security configurations out of the box.
 * To customize the security settings, you can create a `SecurityConfig` class that
 * extends the `WebSecurityConfigurerAdapter` class:
 */

@EnableWebSecurity
public class SpringSecurityGuide extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
            .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
            .and()
            .logout()
                .permitAll();
    }
}

/**
 * Authentication
 * 
 * Spring Security provides several options for user authentication, including:
 * - Form-based authentication
 * - Basic authentication
 * - Digest authentication
 * - OAuth2 authentication
 * - SAML-based authentication
 */

/** 
 * In-Memory Authentication
 * 
 * In-memory authentication is suitable for simple applications or prototyping.
 * The user details are stored in memory.
 */

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
        .withUser("admin")
        .password(passwordEncoder().encode("admin123"))
        .roles("ADMIN")
        .and()
        .withUser("user")
        .password(passwordEncoder().encode("user123"))
        .roles("USER");
}

/**
 * JDBC Authentication
 * 
 * JDBC authentication stores user details in a relational database. This approach
 * is more suitable for production environments.
 */

import javax.sql.DataSource;

@Autowired
private DataSource dataSource;

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.jdbcAuthentication()
        .dataSource(dataSource)
        .withDefaultSchema()
        .withUser("user").password(passwordEncoder().encode("password")).roles("USER")
        .withUser("admin").password(passwordEncoder().encode("admin")).roles("ADMIN");
}

/**
 * LDAP Authentication
 * 
 * Spring Security provides robust support for LDAP authentication. The user details
 * are stored in an LDAP directory.
 */

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.ldapAuthentication()
        .userDnPatterns("uid={0},ou=people")
        .groupSearchBase("ou=groups")
        .contextSource()
            .url("ldap://localhost:8389/dc=springframework,dc=org")
            .and()
        .passwordCompare()
            .passwordEncoder(new LdapShaPasswordEncoder())
            .passwordAttribute("userPassword");
}

/**
 * Authorization
 * 
 * Authorization is the process of determining the access level or permissions of
 * a user. Spring Security supports role-based and permission-based authorization
 * 
 * - Role-Based Access Control (RBAC)
 * - Method-Level Security
 * - URL-Based Security
 * - Pre/Post-Authorization
 */

/**
 * Role-Based Access Control (RBAC)
 * RBAC assigns roles to users and permissions to roles. This is a common approach
 * for controlling access to resources.
 */

@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
            .antMatchers("/admin/**").hasRole("ADMIN")
            .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")
            .antMatchers("/", "/home").permitAll()
            .and()
        .formLogin();
}

/**
 * Method-Level Security
 * Method-level security controls access at the method level using annotations like
 * `@PreAuthorize`, `@PostAuthorize`, `@Secured`, and `@RolesAllowed`.
 */

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;

@Secured("ROLE_ADMIN")
public void adminOnlyMethod() {
    // Admin only logic
}

@PreAuthorize("hasRole('ROLE_USER')")
public void userMethod() {
    // User logic
}

/**
 * URL-Based Security:
 * URL-based security restricts access to specific URLs using `antMatchers()` in
 * the `HttpSecurity` configuration.
 */

@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
            .antMatchers("/secure/**").authenticated()
            .antMatchers("/public/**").permitAll()
            .and()
        .formLogin();
}

/**
 * CSRF Protection:
 * Cross-Site Request Forgery (CSRF) is a type of attack where an attacker can perform
 * unauthorized actions on behalf of a user
 */

@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .csrf().disable(); // Disable CSRF protection for demonstration purposes
}

/**
 * Security Filters
 * 
 * Spring Security uses a chain of filters to handle authentication and authorization
 * The FilterChainProxy acts as the entry point, managing the filter chain.

 */
/**
 * Session Management
 * 
 * Spring Security provides session management features like session fixation protection and session timeouts
 */

@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
            .invalidSessionUrl("/login")
            .maximumSessions(1)
            .expiredUrl("/login?expired")
    }