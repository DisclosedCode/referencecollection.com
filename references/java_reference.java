/*
 * Java Reference
 *
 * Author: ReferenceCollection.com
 * License: MIT License
 */

/**
 * Introduction
 *
 * 1. Overview
 * 2. History
 * 3. Java Development Kit (JDK)
 * 4. Java Virtual Machine (JVM)
 */

/*
 * 1. Overview:
 * Java is an object-oriented programming language designed for platform independence,
 * meaning code runs on any device with a JVM. Known for its simplicity, security, and performance.
 *
 * 2. History:
 * Developed by Sun Microsystems in 1995, Java evolved through versions, gaining
 * features like generics and lambda expressions. Oracle acquired Sun in 2010.
 *
 * 3. Java Development Kit (JDK)
 * Java Development Kit (JDK) is a set of tools necessary for developing, compiling,
 * debugging, and running Java programs. It contains the Java Runtime Environment (JRE),
 * the Java compiler (javac), and other development utilities like javadoc and jar.
 *
 * 4. Java Virtual Machine (JVM):
 * JVM is a virtual machine that runs Java programs on any platform, it handles
 * memory management, garbage collection, and provides a runtime environment
 * for executing Java applications.
 */

/**
 * Packages and Imports
 *
 * 1. Packages
 * 2. Imports
 * 3. Wildcard Imports
 */

/*
 * 1. Packages:
 * Help you organize classes, interfaces and more into groups.
 */
package com.referencecollection;

/*
 * 2. Imports:
 * Allow you to access packages, classes and more.
 */

import java.util.List;
import java.util.Set;

/*
 * 3. Wildcard '*' Imports:
 * Allow you to import all classes from a package
 */
import java.util.*;
import java.io.*;

public class JavaReference {

    /*
     * This is the main method,
     * responsible for running a Java program
     */
    public static void main(String[] args) {

        /**
         * I. Comments & Documentation
         *
         * 1. Comments
         * 2. Javadoc
         */
        class CommentsAndDocumentation {

            /*
             * 1. Comments:
             * Comments are non-executable statements used to annotate/explain a code block
             */

            // Example of single-line comment
            /*
             * Example of
             * multi-line comment
             */

            /**
             * 2. Javadoc:
             * Javadoc is a tool that generates API documentation from Java code using
             * specially formatted comments. These comments include class/method details,
             * parameters, and return values for creating HTML documentation.
             */

            /**
             * JavaDoc comments are written like this.
             * These comments can be placed before a class, interface, constructor, method...
             *
             * Here are some common JavaDoc tags:
             * @param       Describes the inputs a method takes.
             * @return      Describes what a method gives back.
             * @author      Who wrote the code.
             * @version     The version of the program.
             * @since       When this part of the program was first added.
             */
        }

        /**
         * II. Variables and Data Types
         *
         * 1. Primitive Data Types
         * 2. Reference Data Types
         * 3. Type Conversion (Casting)
         */
        class VariablesAndDataTypes {
            public static void main(String[] args) {

                /*
                 * 1. Primitive Data Types:
                 * The eight basic data types, for storing simple values.
                 */
                byte byteVariable = 12;            // Range: -128 to 127
                short shortVariable = 3200;        // Range: -32,768 to 32,767
                int intVariable = 2147;            // Range: -2^31 to 2^31-1
                long longVariable = 2335807L;      // Range: -2^63 to 2^63-1
                float floatVariable = 3.14f;       // Range: 1.4e-45 to 3.4e+38
                double doubleVariable = 3.1415;    // Range: 4.9e-324 to 1.8e+308
                char charVariable = 'A';           // Range: '\u0000' to '\uffff'
                boolean booleanVariable = true;    // true or false

                // Constants: values that remain unchanged.
                final double PI = 3.14159;
                final double RADIUS = 5.0;

                /*
                 * 2. Reference Data Types:
                 * Used to store data that reference memory locations,
                 * like arrays, objects, interfaces, etc.
                 */
                String stringVariable = "Hello, World!";
                int[] numbers = {1, 2, 3};
                Integer num = new Integer(10);
                Double dbl = new Double(3.14);
                JavaReference javaReference = new JavaReference();

                /*
                 * 3. Type Conversion (Casting):
                 * Casting is the process of converting one data type into another.
                 * Implicit conversion (widening) happens automatically with no data is lost.
                 * Explicit conversion (narrowing) uses casting operators and may lose data.
                 */
                int typeInt = 7;
                double typeDouble = typeInt; // Implicit (int to double)
                System.out.println(typeDouble); // 7.0

                double numDouble = 3.14;
                int numInt = (int) numDouble; // Explicit (double to int)
                System.out.println(numInt); // 3
            }
        }

        /**
         * III. Operators
         *
         * 1. Arithmetic Operators
         * 2. Assignment Operators
         * 3. Comparison Operators
         * 4. Logical Operators
         * 5. Bitwise Operators
         * 6. Unary Operators
         * 7. Ternary Operator
         */
        class Operators {
            public static void main(String[] args) {

                int a = 2;
                int b = 5;

                /*
                 * 1. Arithmetic Operators:
                 * Perform basic mathematical operations
                 */
                int sum = a + b;                   // Addition
                int difference = a - b;            // Subtraction
                int product = a * b;               // Multiplication
                int quotient = a / b;              // Division
                int remainder = a % b;             // Modulus

                /*
                 * 2. Assignment Operators:
                 * Assigning values with operations
                 */
                a += 5;                             // Add (a = a + 5)
                a -= 3;                             // Subtract (a = a - 3)
                a *= 2;                             // Multiply (a = a * 2)
                a /= 5;                             // Divide (a = a / 5)
                a %= 7;                             // Modulus (a = a % 7)

                /*
                 * 3. Comparison Operators:
                 * Comparing values, returns true or false
                 */
                boolean isEqual = (a == b);        // Equality
                boolean isGreater = (a > b);       // Greater than
                boolean isLesser = (a < b);        // Less than
                boolean notEqual = (a != b);       // Not equal to
                boolean greaterOrEqual = (a >= b); // Greater than or equal to
                boolean lesserOrEqual = (a <= b);  // Less than or equal to

                /*
                 * 4. Logical Operators:
                 * Combine multiple conditions, returns true or false
                 */
                boolean x = true;
                boolean y = false;
                boolean logicalAnd = x && y;       // Logical AND
                boolean logicalOr = x || y;        // Logical OR
                boolean logicalNotX = !x;          // Logical NOT

                /*
                 * 5. Bitwise Operators:
                 * Perform operations at bit level
                 */
                int bitwiseAnd = a & b;            // Bitwise AND
                int bitwiseOr = a | b;             // Bitwise OR
                int bitwiseXor = a ^ b;            // Bitwise XOR
                int bitwiseComplement = ~a;        // Bitwise Complement
                int leftShift = a << 1;            // Left Shift
                int rightShift = a >> 1;           // Right Shift

                /*
                 * 6. Unary Operators:
                 * Unary operators operate on a single operand.
                 */
                int pre_increment = (++a);          // Pre-increment
                int pre_decrement = (--a);          // Pre-decrement
                int post_increment = (a++);         // Post-increment
                int post_decrement = (a--);         // Post-decrement
                int positive = (+a);                // Positive
                int negative = (-a);                // Negative
                boolean logical = (!true);          // Logical negation

                /*
                 * 7. Ternary Operator:
                 * Concise way to write conditional expressions.
                 * Syntax: (condition) ? (if-true) : (if-false)
                 */
                int score = 65;
                String result = (score >= 50) ? "Pass" : "Fail";
            }
        }

        /**
         * IV. Control Flow Statements
         *
         * 1. Conditional Statements
         * 2. Looping Statements
         * 3. Transfer Statements
         */
        class ControlFlowStatements {
            public static void main(String[] args) {

                /*
                 * 1. Conditional statements:
                 *    if-else
                 *    switch
                 */

                /*
                 * if-else statement:
                 * Executes a code block if a condition is true.
                 */
                int score = 65;
                if (score > 50) {
                    System.out.println("score > 50");
                } else if (score < 50) {
                    System.out.println("score < 50");
                } else {
                    System.out.println("score = 50");
                }

                /*
                 * switch statement:
                 * Executes a code block based on the value of a variable.
                 */
                int choice = 2;
                switch (choice) {
                    case 1:
                        System.out.println("Choice is 1");
                        break;
                    case 2:
                        System.out.println("Choice is 2");
                        break;
                    default:
                        System.out.println("Invalid choice");
                }

                /*
                 * 2. Looping statements:
                 *    for
                 *    while
                 *    do-while
                 *    for
                 */

                /*
                 * for statement:
                 * Repeat a code block until a condition is false.
                 */
                for (int i = 0; i < 5; i++) {
                    System.out.println("Iteration: " + i);
                }

                /*
                 * while statement:
                 * Repeat a code block until a condition is true.
                 */
                int i = 1;
                while (i <= 5) {
                    System.out.println("Iteration " + i);
                    i++;
                }

                /*
                 * do-while statement:
                 * Similar to 'while', but the code block is executed at least once.
                 */
                int j = 1;
                do {
                    System.out.println("Iteration " + j);
                    j++;
                } while (j <= 5);

                /*
                 * for statement:
                 * Iterate over arrays or collections.
                 */
                int[] numbers = {1, 2, 3};
                for (int number : numbers) {
                    System.out.println("Number: " + number);
                }

                /*
                 * 3. Transfer statements:
                 *    break
                 *    continue
                 *    return
                 */

                /*
                 * break statement:
                 * Exit loop or switch statement.
                 */
                for (int m = 0; m < 10; m++) {
                    if (m == 7) {
                        break;
                    }
                }

                /*
                 * continue statement:
                 * Skip current iteration, proceed with next.
                 */
                for (int m = 0; m < 10; m++) {
                    if (m == 3) {
                        continue;
                    }
                }

                /*
                 * return statement:
                 * Exit method, optionally sending back value.
                 */
                class ReturnStatement {
                    public int multiply(int a, int b) {
                        return a * b;
                    }
                }

            }
        }

        /**
         * V. Arrays
         *
         * 1. Declaration and Initialization
         * 2. Accessing Elements
         * 3. Modifying Elements
         * 4. Iterating Through Arrays
         * 5. Multi-dimensional Arrays
         */
        class Arrays {
            public static void main(String[] args) {

                /*
                 * 1. Declaration and Initialization:
                 * Arrays are objects that store multiple variables of the same type.
                 */
                double[] doubleArray = new double[5]; // Initialization with size 5
                int[] intArray = new int[]{1, 2, 3, 4, 5};
                int[] fibonacci = {0, 1, 1, 2, 3, 5};
                char[] vowels = {'a', 'e', 'i', 'o', 'u'};
                String[] stringArray = {"apple", "banana", "orange"};

                /*
                 * 2. Accessing Array Elements:
                 * Elements are accessed using index numbers, starting from 0.
                 */
                System.out.println("First element: " + intArray[0]);
                System.out.println("Second element: " + intArray[1]);

                /*
                 * 3. Modifying Elements:
                 * Arrays can be modified by assigning new values to them.
                 */
                doubleArray[0] = 10;
                doubleArray[1] = 20;

                /*
                 * 3. Iterating Through Arrays:
                 */
                for (int f = 0; f < fibonacci.length; f++) {
                    System.out.print(fibonacci[f] + " ");
                }

                /*
                 * 4. Multidimensional Arrays:
                 * Arrays can have more than one dimension.
                 */
                int[][] matrix = new int[3][3]; // Declaration and initialization of a 3x3 matrix
                matrix[0][0] = 1; // Assigning value (0,0)
                matrix[0][1] = 2; // Assigning value (0,1)
                System.out.println("Element at (0,1): " + matrix[0][1]);
            }
        }

        /**
         * VI. Methods
         *
         * 1. Method Declaration
         * 2. Access modifiers
         * 3. Method Overloading
         * 4. Recursion
         */
        class Methods {
            public static void main(String[] args) {

                /*
                 * 1. Method Declaration:
                 * Methods are reusable blocks of code.
                 * Syntax: <access modifier> <return type> <method name>(<parameter list>)
                 */
                class MethodDeclaration {
                    public void greet() {
                        System.out.println("Hello, world!");
                    }
                }

                /*
                 * 2. Access modifiers:
                 * Access modifiers define the accessibility of a method.
                 *  - public: Accessible from any class
                 *  - private: Accessible only within the same class
                 *  - protected: Accessible within the same package and subclasses
                 */
                class AccessModifiers {
                    protected int substract(int x, int y) {
                        return x - y;
                    }
                }

                /*
                 * 3. Method Overloading:
                 * Redefining the same method with different parameter lists.
                 */
                class MethodOverloading {
                    public double substract(double a, double b) {
                        return a - b;
                    }
                }

                /*
                 * 4. Recursion:
                 * Method calls itself, known as recursion.
                 */
                class Recursion {
                    public int factorial(int n) {
                        if (n == 0 || n == 1) {
                            return 1;
                        } else {
                            return n * factorial(n - 1);
                        }
                    }
                }

            }
        }

        /**
         * VII. Object-Oriented Programming
         *
         * 1. Classes
         * 2. Objects
         * 3. Encapsulation
         * 4. Inheritance
         * 5. Polymorphism
         * 6. Abstraction
         * 7. Interfaces
         */
        class OOP {
            public static void main(String[] args) {

                /*
                 * 1. Classes
                 * Class is a blueprint for creating objects.
                 */
                class Car {
                    // Variables
                    String brand;
                    String model;

                    // Constructor without parameters and with default value
                    public Car() {
                        brand = "Unknown";
                        model = "Unknown";
                    }

                    // Constructor with parameters
                    public Car(String brand, String model) {
                        this.brand = brand;
                        this.model = model;
                    }

                    // Method
                    public void displayCarInfo() {
                        System.out.println("Brand: " + brand);
                        System.out.println("Model: " + model);
                    }
                }

                /*
                 * 2. Objects:
                 * Objects are instances of classes.
                 */
                Car honda = new Car("Honda", "Accord");
                // Accessing object property and method
                System.out.println("Honda model: " + honda.model);
                honda.displayCarInfo();

                /*
                 * 3. Encapsulation:
                 * Hide the internal state of an object, and only allows access through methods.
                 */
                class Wallet {
                    // private variables
                    private double balance;

                    // Getter and Setter methods for encapsulated fields
                    public double getBalance() {
                        return balance;
                    }

                    public void setBalance(double balance) {
                        this.balance = balance;
                    }
                }

                Wallet wallet = new Wallet();
                wallet.setBalance(1000);
                System.out.println("Balance: " + wallet.getBalance());

                /*
                 * 4. Inheritance:
                 * Allows a class to inherit properties and behavior from another class.
                 */
                class ElectricCar extends Car {

                    // specific field to ElectricCar
                    private int batteryLife;

                    // Constructor including fields from Car (super) class and ElectricCar class
                    public ElectricCar(String make, String model, int batteryLife) {
                        super(make, model);
                        this.batteryLife = batteryLife;
                    }

                    /*
                     * Method overriding
                     * Providing a specific implementation for a method
                     * already defined in its superclass (car).
                     */
                    @Override
                    public void displayCarInfo() {
                        super.displayCarInfo();
                        System.out.println("Battery Life: " + batteryLife + " miles");
                    }

                    /*
                     * Method overloading
                     * Defining multiple methods with the same name but different parameters.
                     */
                    public void displayCarInfo(boolean includeBatteryLife) {
                        super.displayCarInfo();
                        if (includeBatteryLife) {
                            System.out.println("Battery Life: " + batteryLife + " miles");
                        }
                    }

                    // Additional method specific to ElectricCar
                    public void charge() {
                        System.out.println("Charging the car...");
                    }
                }

                /*
                 * 5. Polymorphism:
                 * Lets different objects be treated similarly, even if they're from different classes
                 */
                Car teslaModelS = new ElectricCar("Tesla", "Model S", 400);
                // Calls the overridden displayCarInfo() method in ElectricCar
                teslaModelS.displayCarInfo();

                /*
                 * 6. Abstraction:
                 * Is about hiding implementation details and showing only essential features.
                 * Abstract classes can contain both implemented and abstract methods.
                 * Abstract Classes can only extend one abstract class.
                 */
                abstract class Vehicle {
                    abstract void operate();
                }

                class Car extends Vehicle {
                    @Override
                    void operate() {
                        System.out.println("Operating Car");
                    }
                }

                class Motorcycle extends Vehicle {
                    @Override
                    void operate() {
                        System.out.println("Operating Motorcycle");
                    }
                }

                Vehicle myCar = new Car();
                myCar.operate(); // Operating Car

                Vehicle myMotorcycle = new Motorcycle();
                myMotorcycle.operate(); // Operating Motorcycle

                /*
                 * 7. Interfaces:
                 * Define a contract for classes, specifying methods they must implement.
                 * Classes can implement multiple interfaces.
                 */
                interface MessagingService {
                    void sendMessage(String message, String recipient);
                }

                class EmailService implements MessagingService {
                    @Override
                    public void sendMessage(String message, String recipient) {
                        System.out.println("Sending email to " + recipient + ": " + message);
                    }
                }

                MessagingService emailService = new EmailService();
                emailService.sendMessage("Hello, how are you?", "example@example.com");

            }
        }

        /**
         * VIII. Exception Handling
         *
         * 1. Try-Catch Blocks
         * 2. Multiple Catch Blocks
         * 3. Finally Block
         * 5. Custom Exceptions
         * 4. Throwing Exceptions
         */
        class ExceptionHandling {
            public static void main(String[] args) {

                /*
                 * 1. Try-Catch Blocks:
                 * Handle potential errors or exceptions in code.
                 */
                int[] intArray = {1, 2, 3, 4, 5};
                try {
                    System.out.println(intArray[10]);
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("Caught ArrayIndexOutOfBoundsException: " + e.getMessage());
                }

                /*
                 * 2. Multiple Catch Blocks:
                 * Handling different types of exceptions separately.
                 */
                try {
                    int[] numbers = {1, 2, 3};
                    System.out.println(numbers[4]); // Index out of bounds exception
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("Array index out of bounds");
                } catch (Exception e) {
                    System.out.println("An error occurred");
                }

                /*
                 * 3. Finally Block:
                 * Finally block get executed regardless of an exception or not.
                 */
                try {
                    int result = 10 / 0;
                    System.out.println("Result: " + result);
                } catch (ArithmeticException e) {
                    System.out.println("Error: Division by zero");
                } finally {
                    System.out.println("Inside finally block");
                }

                /*
                 * 4. Custom Exceptions:
                 * You can create your own exceptions to handle specific situations.
                 */
                class InvalidAgeException extends Exception {
                    public InvalidAgeException(String message) {
                        super(message);
                    }
                }

                /*
                 * 5. Throwing Exceptions:
                 * You can manually throw exceptions to handle specific cases.
                 */
                class ThrowExceptionExample {
                    public static void main(String[] args) {
                        try {
                            validateAge(15);
                        } catch (InvalidAgeException e) {
                            System.out.println("Invalid age: " + e.getMessage());
                        }
                    }

                    public static void validateAge(int age) throws InvalidAgeException {
                        if (age < 18) {
                            throw new InvalidAgeException("Age must be at least 18");
                        }
                    }

                }
            }
        }

        /**
         * IX. File Input/Output (I/O)
         *
         * 1. File Handling
         * 2. Reading from Files
         * 3. Writing to Files
         * 4. File Handling Exceptions
         */
        class InputOuput {
            public static void main(String[] args) {

                /*
                 * 1. File Handling:
                 * Managing files on a computer system.
                 */
                try {

                    // Creating a new file
                    File file = new File("newfile.txt");
                    if (file.createNewFile()) {
                        System.out.println("File created successfully.");
                    } else {
                        System.out.println("File already exists.");
                    }

                    // Deleting the file
                    if (file.delete()) {
                        System.out.println("File deleted successfully.");
                    } else {
                        System.out.println("Failed to delete the file.");
                    }

                    // Check if a file exists
                    File existingFile = new File("newfile.txt");
                    if (existingFile.exists()) {
                        System.out.println("File exists: " + existingFile.getName());
                    } else {
                        System.out.println("File does not exist.");
                    }

                } catch (FileNotFoundException e) {
                    System.out.println("File not found");
                } catch (IOException e) {
                    e.printStackTrace();
                }

                /*
                 * 2. Writing to Files:
                 * Ways of writing data to a file.
                 */
                try {

                    String content = "Hello, this is a sample text.";
                    File file = new File("filename.txt");

                    // Using FileOutputStream
                    FileOutputStream fos = new FileOutputStream(file);
                    fos.write(content.getBytes());
                    fos.close();

                    // Using FileWriter
                    FileWriter fileWriter = new FileWriter(file);
                    fileWriter.write(content);
                    fileWriter.close();

                    // Using BufferedWriter
                    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file));
                    bufferedWriter.write(content);
                    bufferedWriter.close();

                } catch (IOException e) {
                    e.printStackTrace();
                }

                /*
                 * 3. Reading from Files:
                 * Ways of reading data from a file.
                 */
                try {

                    File file = new File("filename.txt");

                    // Using FileInputStream
                    FileInputStream fis = new FileInputStream(file);
                    int content;
                    while ((content = fis.read()) != -1) {
                        System.out.print((char) content);
                    }
                    fis.close();

                    // Using FileReader
                    FileReader fileReader = new FileReader(file);
                    int data;
                    while ((data = fileReader.read()) != -1) {
                        System.out.print((char) data);
                    }
                    fileReader.close();

                    // Using BufferedReader
                    BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
                    String line;
                    while ((line = bufferedReader.readLine()) != null) {
                        System.out.println(line);
                    }
                    bufferedReader.close();

                    // Using Scanner
                    Scanner scanner = new Scanner(file);
                    while (scanner.hasNextLine()) {
                        System.out.println(scanner.nextLine());
                    }
                    scanner.close();

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        /**
         * X. Collections Framework
         *
         * 1. Lists: ArrayList vs LinkedList
         * 2. Sets: HashSet vs TreeSet
         * 3. Maps: HashMap vs TreeMap
         * 4. Iterating Through Lists/Sets
         * 5. Iterating Through Maps
         * 6. Sorting Collections
         * 7. Collection Algorithms
         */
        class CollectionsFramework {
            public static void main(String[] args) {

                /*
                 * 1. List: ArrayList:
                 * Lists maintain the order of elements and allow duplicate elements.
                 */
                List<String> arrayList = new ArrayList<>();
                arrayList.add("one");
                arrayList.add("two");

                /*
                 * 1. List: LinkedList
                 * A sequence of elements, each element is connected to its next and previous elements
                 */
                List<String> linkedList = new LinkedList<>();
                linkedList.add("one");
                linkedList.add("two");

                /*
                 * 2. Set: HashSet
                 * Stores unique elements, without maintaining any order.
                 */
                Set<String> hashSet = new hashSet<>();
                linkedList.add("one");
                linkedList.add("two");

                /*
                 * 2. Set: TreeSet
                 * Sorted set that stores unique elements in ascending order.
                 */
                Set<String> treeSet = new TreeSet<>();
                linkedList.add("one");
                linkedList.add("two");

                /*
                 * 3. Map: HashMap
                 * Stores key-value pairs, allowing fast retrieval of values by their keys.
                 */
                Map<String, Integer> hashMap = new HashMap<>();
                hashMap.put("one", 1);
                hashMap.put("two", 2);

                /*
                 * 3. Map: TreeMap
                 * Sorted map that stores key-value pairs in sorted order based on the keys.
                 */
                Map<String, Integer> treeMap = new TreeMap<>();
                treeMap.put("one", 1);
                treeMap.put("two", 2);

                /*
                 * 4. Iterating Through Lists/Sets:
                 * Use for-each loop or iterators.
                 */
                for (String item : hashSet) {
                    System.out.println(item);
                }

                Iterator<String> arrayListIterator = hashSet.iterator();
                while (arrayListIterator.hasNext()) {
                    System.out.println(arrayListIterator.next());
                }

                /*
                 * 5. Iterating Through Maps:
                 * Use for-each loop or iterators.
                 */
                for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
                    System.out.println(entry.getKey() + " > " + entry.getValue());
                }

                Iterator<Map.Entry<String, Integer>> hashMapIterator = hashMap.entrySet().iterator();
                while (hashMapIterator.hasNext()) {
                    Map.Entry<String, Integer> entry = hashMapIterator.next();
                    System.out.println(entry.getKey() + " > " + entry.getValue());
                }

                /*
                 * 6. Collection Algorithms:
                 * Java provides different methods to work with collections.
                 */
                List<Integer> numbers = new ArrayList<>();
                numbers.add(5);
                numbers.add(2);
                // Sort
                Collections.sort(numbers);
                // Sum
                int sum = Collections.sum(numbers);
                System.out.println("Sum of Numbers: " + sum);
                // Reverse
                Collections.reverse(numbers);
                System.out.println("Reversed Numbers: " + numbers);
            }
        }

        /**
         * XI. Generics
         *
         * 1. Introduction to Generics
         * 2. Generic Classes
         * 3. Generic Methods
         * 4. Wildcards
         * 5. Bounded Type Parameters
         */
        class Generics {
            public static void main(String[] args) {

                /*
                 * 1. Introduction to Generics:
                 * Create classes, interfaces, and methods that operate with parameterized types.
                 * The letter 'T' represents the type parameter.
                 */

                /*
                 * 2. Generic Classes
                 * Classes with type parameters for flexible and type-safe code.
                 */
                class Shape<T> {
                    private T t;

                    public void set(T t) {
                        this.t = t;
                    }

                    public T get() {
                        return t;
                    }
                }

                Shape<String> stringBox = new Shape<>();
                stringBox.set("Hello World");

                Shape<Integer> integerBox = new Shape<>();
                integerBox.set(100);

                /*
                 * 3. Generic Methods:
                 * Methods with type parameters for flexibility.
                 */
                class GenericMethod {
                    public static <T> void printList(List<T> list) {
                        for (T item : list) {
                            System.out.println(item);
                        }
                    }

                    public static void main(String[] args) {
                        List<String> stringArrayList = new ArrayList<>();
                        stringArrayList.add("one");
                        List<Integer> integerArrayList = new ArrayList<>();
                        integerArrayList.add(100);

                        printList(stringArrayList);
                        printList(integerArrayList);
                    }
                }

                /*
                 * 4. Wildcards:
                 * Flexible typing for methods with unknown types.
                 * There are three types of wildcards: ?, ? extends T, and ? super T.
                 */
                class Wildcards {
                    public static void printListWildcard(List<?> list) {
                        for (Object item : list) {
                            System.out.println(item);
                        }
                    }

                    public static void main(String[] args) {
                        List<String> stringArrayList = new ArrayList<>();
                        stringArrayList.add("one");
                        List<Integer> integerArrayList = new ArrayList<>();
                        integerArrayList.add(100);

                        printListWildcard(stringArrayList);
                        printListWildcard(integerArrayList);
                    }
                }

                /*
                 * 5. Bounded Type Parameters:
                 * You can restrict the types that can be passed as type arguments
                 * There are two kinds of bounds: upper bound and lower bound.
                 */
                class MathUtils {

                    // Upper Bound: Accepts types that extend Number
                    public static <T extends Number> double findMaxValue(List<T> list) {
                        double max = Double.NEGATIVE_INFINITY;
                        for (T num : list) {
                            if (num.doubleValue() > max) {
                                max = num.doubleValue();
                            }
                        }
                        return max;
                    }

                    // Lower Bound: Accepts types that are superclasses of Integer
                    public static int sum(List<? super Integer> list) {
                        int sum = 0;
                        for (Object obj : list) {
                            if (obj instanceof Integer) {
                                sum += (Integer) obj;
                            }
                        }
                        return sum;
                    }

                    public static void main(String[] args) {
                        List<Integer> integerList = new ArrayList<>();
                        integerList.add(5);
                        integerList.add(10);
                        integerList.add(15);

                        System.out.println("Sum of integers: " + MathUtils.sum(integerList));
                        System.out.println("Maximum value: " + MathUtils.findMaxValue(integerList));

                    }
                }

            }
        }

    }
}



