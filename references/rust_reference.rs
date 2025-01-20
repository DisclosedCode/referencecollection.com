// --------------------------------------------------------------------------------
// Rust Reference and Guide
//
// ReferenceCollection.com
// Licensed under CC BY-SA
// --------------------------------------------------------------------------------

// TABLE OF CONTENTS
// -----------------
// 1. Introduction to Rust
// 2. Basic Syntax and Structure
// 3. Data Types
// 4. Variables and Mutability
// 5. Operators
// 6. Control Flow
// 7. Functions
// 8. Ownership and Borrowing
// 9. Structs and Enums
// 10. Modules and Crates
// 11. Error Handling
// 12. Generics
// 13. Traits
// 14. Lifetimes
// 15. Collections
// 16. Concurrency
// 17. Testing
// 18. Macros
// 19. Unsafe Rust

// -----------------------------------------------------------------------------------------------------
// 1. Introduction to Rust
// -----------------------------------------------------------------------------------------------------

// Rust is a systems programming language that emphasizes safety, speed, and concurrency.
// It achieves memory safety without a garbage collector, using a system of ownership
// and borrowing. Rust is suitable for a wide range of applications, from embedded systems
// to web servers and beyond.
//
// Why Learn Rust?
// - Memory Safety: Prevents common errors like dangling pointers and data races at compile-time.
// - Performance: Offers performance comparable to C and C++ with zero-cost abstractions.
// - Concurrency: Provides safe and efficient tools for concurrent programming.
// - Expressive Type System: Enables powerful and flexible code with strong static typing.
// - Growing Ecosystem: A vibrant community and an increasing number of libraries and tools.
//
// Getting Started:
// - Install Rust.
// - Use the Rust compiler `rustc` to compile code.
// - Use the Rust package manager `cargo` to manage projects, dependencies, and builds.
// - Create Rust source files with the `.rs` extension.
//
// Basic Execution:
// - Create a new project: `cargo new <project_name>`
// - Navigate to the project directory: `cd <project_name>`
// - Build the project: `cargo build`
// - Run the project: `cargo run`
// - Compile a single file: `rustc <filename.rs>`
// - Run a compiled binary: `./<filename>` (or `<filename>.exe` on Windows)

// -----------------------------------------------------------------------------------------------------
// 2. Basic Syntax and Structure
// -----------------------------------------------------------------------------------------------------

// A Rust program is structured into functions, which contain statements and expressions.
// The `main` function is the entry point of the program.
//
// Basic Syntax Elements:
// - Comments: Use `//` for single-line comments and `/* ... */` for multi-line comments.
// - Semicolons: Statements in Rust must end with a semicolon `;`.
// - Blocks: Rust uses curly braces {} to define blocks of code.
// - Case-sensitive: Variable and Function names are case-sensitive.

// This is the main function where the program execution begins.
fn main() {
    println!("Hello, Rust!"); // This line prints "Hello, Rust!" to the console.
}

// -----------------------------------------------------------------------------------------------------
// 3. Data Types
// -----------------------------------------------------------------------------------------------------

// Rust is statically typed, meaning that the type of every variable must be known at compile time.
// Common data types include:
//   - Integers: `i8`, `i16`, `i32`, `i64`, `isize` (signed); `u8`, `u16`, `u32`, `u64`, `usize` (unsigned)
//   - Floating-point numbers: `f32`, `f64`
//   - Booleans: `bool` (true or false)
//   - Characters: `char` (Unicode scalar values)
//   - Tuples: `(value1, value2, ...)`
//   - Arrays: `[value1, value2, ...]` (fixed size)
//   - Slices: Dynamic views into arrays
//   - Strings: `String` (growable, heap-allocated) and `&str` (string slices)

fn data_types_example() {
    let integer: i32 = 42; // Declaring an i32 integer.
    let float: f64 = 3.14; // Declaring a f64 floating-point number.
    let boolean: bool = true; // Declaring a boolean.
    let character: char = 'A'; // Declaring a character.
    let tuple: (i32, f64, char) = (10, 2.71, 'B'); // Declaring a tuple.
    let array: [i32; 3] = [1, 2, 3]; // Declaring an array of 3 i32 integers.
    let string_slice: &str = "hello"; // Declaring a string slice.
    let string_owned: String = String::from("world"); // Declaring an owned string.
}

// For dynamic collections, use `Vec` (vector). We will cover this in the Collections section.

// -----------------------------------------------------------------------------------------------------
// 4. Variables and Mutability
// -----------------------------------------------------------------------------------------------------

// Variables in Rust are immutable by default.
// Use `let` to declare variables and `mut` to make them mutable.

// Immutable variables, cannot be changed after they are initialized.
fn main() {
    let x = 5; // x is an immutable variable
    // x = 10; // This will cause a compile-time error because x is immutable
    println!("The value of x is: {}", x);
}

// Mutable variables, can be changed after they are initialized.
fn main() {
    let mut x = 5; // x is a mutable variable
    println!("The value of x is: {}", x);
    x = 10; // x is now 10
    println!("The value of x is: {}", x);
}

// Shadowing, allows you to declare a new variable with the same name as a previous variable.
fn main() {
    let x = 5;
    println!("The value of x is: {}", x); // Output: The value of x is: 5
    let x = x + 1; // Shadowing the previous x
    println!("The value of x is: {}", x); // Output: The value of x is: 6
}

// Constants, are immutable and must have their type specified.
const PI: f64 = 3.14159;
println!("Constant PI: {}", PI);

// Type inference, is the compiler's ability to deduce the type of a variable.
let x = 100; // Rust infers x to be of type i32
println!("Inferred x: {}", x);

// -----------------------------------------------------------------------------------------------------
// 5. Operators
// -----------------------------------------------------------------------------------------------------

// Rust supports a variety of operators, including arithmetic, comparison, logical, and bitwise operators.

fn main() {
    // Arithmetic operators include `+`, `-`, `*`, `/`, and `%`.
    let a = 10;
    let b = 3;
    println!("Addition: {}", a + b);    // Output: 13

    // Comparison operators include `==`, `!=`, `>`, `<`, `>=`, and `<=`.
    let c = 5;
    let d = 10;
    println!("Equal: {}", c == d); // Output: false

    // Logical operators include `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).
    let e = true;
    let f = false;
    println!("And: {}", e && f); // Output: false

    // Bitwise operators include `&` (bitwise AND), `|` (bitwise OR), `^` (bitwise XOR), `<<` (left shift), and `>>` (right shift).
    let g: u8 = 0b00001111; // Binary representation
    let h: u8 = 0b00000101;
    println!("Bitwise AND: {:08b}", g & h); // Output: 00000101, `{:b}` is used to print the binary representation

    // Assignment operators include `=`, `+=`, `-`, `*=`, `/=`, and `%=`.
    let mut i = 5;
    i += 2; // i = i + 2
    println!("Assignment: {}", i); // Output: 7
}

// -----------------------------------------------------------------------------------------------------
// 6. Control Flow
// -----------------------------------------------------------------------------------------------------

// Control flow statements determine the order in which code is executed.
// Rust has several control flow statements, including `if`, `else if`, `else`, `loop`, `while`, and `for`.

// `if`, `else if`, `else` Statements
fn main() {
    let x = 10;

    if x > 10 {
        println!("x is greater than 10");
    } else if x < 10 {
        println!("x is less than 10");
    } else {
        println!("x is equal to 10");
    } // Output: x is equal to 10
}

// `loop` statements create an infinite loop, use `break` to exit the loop.
fn main() {
    let mut counter = 0;
    loop {
        println!("Counter: {}", counter);
        counter += 1;
        if counter > 5 {
            break; // Exit the loop when counter is greater than 5
        }
    }
}

// `while` statements execute a block of code as long as a condition is true.
fn main() {
    let mut counter = 0;
    while counter <= 5 {
        println!("Counter: {}", counter);
        counter += 1;
    }
}

// `for` statements iterate over a sequence of values.
fn main() {
    for i in 0..5 { // Iterate from 0 to 4 (exclusive of 5)
        println!("Value: {}", i);
    }
}

// -----------------------------------------------------------------------------------------------------
// 7. Functions
// -----------------------------------------------------------------------------------------------------

// Functions are blocks of code that perform specific tasks.
// Functions can have parameters and return values.

// Functions are defined using the `fn` keyword, followed by the function name,
// parameters in parentheses, and the return type after an arrow `->`.

// Function Definition
fn add(x: i32, y: i32) -> i32 {
    // The `-> i32` specifies that the function returns a 32-bit integer.
    // The last expression in a function is implicitly returned (no semicolon).
    x + y
}

// Function without parameters and return value.
fn greet() {
    println!("Hello from greet function!");
}

// Returning Multiple Values, Functions can return multiple values using tuples.
fn get_coordinates() -> (i32, i32) {
    (10, 20)
}

// Early Returns, Functions can return early using the `return` keyword.
fn check_number(number: i32) -> bool {
    if number < 0 {
        return false; // Early return if number is negative
    }
    true
}

fn main() {

    println!("The sum is: {}", add(5, 3)); // Output: The sum is: 8

    greet(); // Output: Hello from greet function!

    let coordinates = get_coordinates();
    println!("X: {}, Y: {}", coordinates.0, coordinates.1); // Output: X: 10, Y: 20

    println!("Is 5 positive? {}", check_number(5)); // Output: Is 5 positive? true
}

// -----------------------------------------------------------------------------------------------------
// 8. Ownership and Borrowing
// -----------------------------------------------------------------------------------------------------

// Rust's ownership system is a core feature that enables memory safety without a garbage collector.
// Every value has an owner, when the owner goes out of scope, the value is dropped (memory is freed).

// Ownership
// There can only be one owner of a value at a time.
// When a value is assigned to a new variable, the ownership is transferred.
fn ownership_example() {
    let s1 = String::from("hello"); // s1 owns the string data
    let s2 = s1; // Ownership is transferred from s1 to s2
    // println!("s1: {}", s1); // This will cause a compile-time error because s1 no longer owns the data
    println!("s2: {}", s2); // s2 now owns the data.
}

// Cloning
// To copy the data instead of transferring ownership, use the `clone()` method.
fn clone_example() {
    let s1 = String::from("hello");
    let s2 = s1.clone(); // s2 gets a copy of the data
    println!("s1: {}, s2: {}", s1, s2); // Both s1 and s2 own their own copies of the data.
}

// Immutable Borrowing
// Borrowing is a way to access the data of a value without transferring ownership.
// Immutable references: `&`
fn immutable_borrow_example() {
    let s1 = String::from("hello");
    let r1 = &s1; // r1 is an immutable borrow of s1
    let r2 = &s1; // r2 is another immutable borrow of s1
    println!("r1: {}, r2: {}, s1: {}", r1, r2, s1); // All three can access the data.
}

// Mutable Borrowing
// You can have only one mutable borrow of a value at a time.
// You cannot have any immutable borrows while there is a mutable borrow.
fn mutable_borrowing() {
    let mut s1 = String::from("hello");
    let r1 = &mut s1; // r1 is a mutable borrow of s1
    r1.push_str(", world!"); // Modify the borrowed data.
    // let r2 = &s1; // This will cause a compile-time error because there is already a mutable borrow.
    println!("r1: {}", r1);
}

// Dangling References
// Rust's borrow checker prevents dangling references (references to memory that has been deallocated).
fn dangle() -> &String { // This function will cause a compile-time error.
    let s = String::from("hello");
    &s /* Return a reference to the string, but the string will be dropped when the function ends, leaving a dangling reference. */
}
// The above code will not compile. Rust prevents dangling references at compile time.
// To avoid dangling references, return the value, not a reference.
fn no_dangle() -> String {
    let s = String::from("hello");
    s // Return the string, not a reference. Ownership is transferred.
}

// -----------------------------------------------------------------------------------------------------
// 9. Structs and Enums
// -----------------------------------------------------------------------------------------------------

// Structs and enums are used to create custom data types.
// Structs are used to group related data together.
// Enums are used to define a type that can have one of several possible values.

// Structs
// Defined using `struct`, followed by the struct name and a list of fields.
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 10, y: 20 }; // Create an instance of the Point struct
    println!("Point: x = {}, y = {}", p.x, p.y); // Access struct fields using dot notation
}

// Tuple Structs
// Similar to structs, but their fields are accessed by index instead of by name.
struct Color(u8, u8, u8);

fn main() {
    let red = Color(255, 0, 0); // Create an instance of the Color tuple struct
    println!("Red: R = {}, G = {}, B = {}", red.0, red.1, red.2); // Access tuple struct fields using index
}

// Unit-like Structs
// Unit-like structs have no fields.
// They are useful for implementing traits.
struct Marker;

fn main() {
    let _m = Marker; // Create an instance of the unit-like struct
    println!("Marker struct created");
}

// Enums
// Defined using the `enum` keyword, followed by the enum name and a list of variants.
enum Direction {
    North,
    South,
    East,
    West,
}

fn main() {
    let direction = Direction::North; // Create an instance of the Direction enum
    match direction {
        Direction::North => println!("Moving North"),
        Direction::South => println!("Moving South"),
        Direction::East => println!("Moving East"),
        Direction::West => println!("Moving West"),
    } // Output: Moving North
}

// Enums with Data
// Enums can store data with their variants.
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

fn main() {
    let message = Message::Move { x: 10, y: 20 };
    match message {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to x = {}, y = {}", x, y), // Output: Move to x = 10, y = 20
        Message::Write(text) => println!("Write: {}", text),
        Message::ChangeColor(r, g, b) => println!("Change color to R = {}, G = {}, B = {}", r, g, b),
    }
}

// -----------------------------------------------------------------------------------------------------
// 10. Modules and Crates
// -----------------------------------------------------------------------------------------------------

// Modules and crates are used to organize and manage Rust code.
// A crate is a compilation unit, which can be a binary executable or a library.
// Modules are used to group related code within a crate.

// Modules
// Defined using the `mod` keyword, followed by the module name and a block of code.
// Modules can contain functions, structs, enums, and other modules.
mod my_module {
    pub fn hello() {
        println!("Hello from my_module!");
    }
}

fn main() {
    my_module::hello(); // Access the function in the module using the module name and `::`
}

// Nested Modules
// Modules can be nested within other modules.
mod parent_module {
    pub mod child_module {
        pub fn hello_child() {
            println!("Hello from child_module!");
        }
    }
}

fn main() {
    parent_module::child_module::hello_child(); // Access the function in the nested module
}

// `use` Keyword
// The `use` keyword is used to bring items from a module into the current scope.
// This allows you to use the items without having to specify the full path.
mod my_math {
    pub fn add(x: i32, y: i32) -> i32 {
        x + y
    }
}

use my_math::add;

fn main() {
    let sum = add(5, 3); // Use the `add` function directly using the `use` keyword.
    println!("Sum: {}", sum);
}

// Crates
// A crate is a compilation unit, which can be a binary executable or a library.
// A binary crate has a `main` function and produces an executable file.
// A library crate does not have a `main` function and produces a library file (e.g., `.rlib`).

// Example:

// Creating a Library Crate
// Create a new library crate using `cargo new --lib my_lib`.
// In `src/lib.rs`, add the following code:

// src/lib.rs
pub mod math {
    pub fn add(x: i32, y: i32) -> i32 {
        x + y
    }
}

// Using a Library Crate
// In a new binary crate, add `my_lib` as a dependency in `Cargo.toml`.
// Then in `src/main.rs`, add the following code:

// Cargo.toml
// [dependencies]
// my_lib = { path = "../my_lib" }

// src/main.rs
// extern crate my_lib;

// use my_lib::math::add;

// fn main() {
//     let sum = add(5, 3);
//     println!("Sum: {}", sum);
// }

// -----------------------------------------------------------------------------------------------------
// 11. Error Handling
// -----------------------------------------------------------------------------------------------------

// Rust uses a robust error handling system that emphasizes explicitness and safety.
// Rust differentiates between recoverable errors (e.g., file not found) and unrecoverable errors (e.g., out of memory).

// Recoverable Errors with `Result`
// The `Result` enum is used to represent the outcome of an operation that might fail.
// It has two variants: `Ok(T)` for success and `Err(E)` for failure, where `T` is the success type and `E` is the error type.

// Example: Using `Result`
use std::fs::File;
use std::io::ErrorKind;
use std::io::Read;

fn read_file(file_path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(file_path)?; // The `?` operator propagates the error if the file cannot be opened.
    let mut contents = String::new();
    file.read_to_string(&mut contents)?; // The `?` operator propagates the error if the read operation fails.
    Ok(contents) // Return the file contents if the operations are successful.
}

fn main() {
    match read_file("example.txt") {
        Ok(contents) => println!("File contents: {}", contents),
        Err(error) => match error.kind() {
            ErrorKind::NotFound => println!("File not found"),
            _ => println!("Error reading file: {}", error),
        }
    }
}

// Note: Create an example.txt file with some content in the same directory to run this example.

// Unrecoverable Errors with `panic!`
// The `panic!` macro is used to indicate that a program has reached an unrecoverable state.
// When a `panic!` occurs, the program will typically terminate.

// Example: Using `panic!`
fn divide(x: i32, y: i32) -> i32 {
    if y == 0 {
        panic!("Cannot divide by zero"); // Trigger a panic if y is zero
    }
    x / y
}

fn main() {
    let result = divide(10, 2);
    println!("Result: {}", result);

    // The following line will cause a panic
    // let result = divide(10, 0);
    // println!("Result: {}", result);
}

// `unwrap()` and `expect()`
// The `unwrap()` method extracts the success value from a `Result`, but will `panic!` if the `Result` is an `Err`.
// The `expect()` method is similar to `unwrap()`, but allows you to specify a custom error message.
// These methods should be used with caution, as they can lead to unhandled panics.

// Example: `unwrap()` and `expect()`
use std::fs;

fn main() {
    let contents = fs::read_to_string("example.txt").expect("Failed to read file");
    println!("File contents: {}", contents);
}

// Custom Error Types
// You can define your own error types using enums or structs.
// This allows you to provide more specific error information.

// Example: Custom Error Type
#[derive(Debug)]
enum MyError {
    InvalidInput,
    OpenFileFailed(std::io::Error),
}

fn process_input(input: i32) -> Result<i32, MyError> {
    if input < 0 {
        return Err(MyError::InvalidInput);
    }
    Ok(input * 2)
}


fn main() {
    match process_input(-5) {
        Ok(result) => println!("Result: {}", result),
        Err(error) => println!("Error: {:?}", error), // Output: Error: InvalidInput
    }

    match process_input(5) {
        Ok(result) => println!("Result: {}", result), // Output: Result: 10
        Err(error) => println!("Error: {:?}", error),
    }
}

// -----------------------------------------------------------------------------------------------------
// 12. Generics
// -----------------------------------------------------------------------------------------------------

// Generics allow you to write code that can work with different types without having to duplicate the code.
// Generics are a powerful tool for creating reusable and flexible code.

// Generic Functions
// Generic functions are functions that can work with different types.
// Type parameters are specified in angle brackets `<>` after the function name.

// Example: Generic Function
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    // `T: PartialOrd` specifies that the type `T` must implement the `PartialOrd` trait, which allows comparison.
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![1, 5, 2, 8, 3];
    let largest_number = largest(&numbers);
    println!("Largest number: {}", largest_number); // Output: Largest number: 8

    let chars = vec!['a', 'z', 'b', 'c'];
    let largest_char = largest(&chars);
    println!("Largest char: {}", largest_char); // Output: Largest char: z
}

// Generic Structs
// Generic structs are structs that can contain different types.
// Type parameters are specified in angle brackets `<>` after the struct name.

// Example: Generic Struct
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let p1: Point<i32> = Point { x: 10, y: 20 };
    let p2: Point<f64> = Point { x: 3.14, y: 2.71 };
    println!("Point 1: x = {}, y = {}", p1.x, p1.y); // Output: Point 1: x = 10, y = 20
    println!("Point 2: x = {}, y = {}", p2.x, p2.y); // Output: Point 2: x = 3.14, y = 2.71
}

// Generic Enums
// Generic enums are enums that can have different types in their variants.

// Example: Generic Enum
enum Option<T> {
    Some(T),
    None,
}

fn main() {
    let some_value: Option<i32> = Option::Some(10);
    let none_value: Option<String> = Option::None;

    match some_value {
        Option::Some(value) => println!("Some value: {}", value), // Output: Some value: 10
        Option::None => println!("None value"),
    }

    match none_value {
        Option::Some(value) => println!("Some value: {}", value),
        Option::None => println!("None value"), // Output: None value
    }
}

// Generic Traits
// Generic traits are traits that can be implemented for different types.

// Example: Generic Trait
trait Summary {
    fn summarize(&self) -> String;
}

struct NewsArticle {
    headline: String,
    author: String,
    content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {}", self.headline, self.author)
    }
}

struct Tweet {
    username: String,
    content: String,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{} : {}", self.username, self.content)
    }
}

fn main() {
    let article = NewsArticle {
        headline: String::from("Rust Generics"),
        author: String::from("Jane Doe"),
        content: String::from("This is an article about Rust generics."),
    };
    let tweet = Tweet {
        username: String::from("rustacean"),
        content: String::from("Rust is awesome!"),
    };

    println!("Tweet summary: {}", tweet.summarize()); // Output: Tweet summary: rustacean : Rust is awesome!
}

// -----------------------------------------------------------------------------------------------------
// 13. Traits
// -----------------------------------------------------------------------------------------------------

// Traits are similar to interfaces or abstract classes in other programming languages.
// They define a set of methods that a type must implement to be considered a member of that trait.
// Traits enable polymorphism and code reuse.

// Defining Traits
// Traits are defined using the `trait` keyword, followed by the trait name and a block of method signatures.

// Example: Defining a Trait
trait Shape {
    fn area(&self) -> f64;
    fn perimeter(&self) -> f64;
}

// Implementing Traits
// Types implement traits using the `impl` keyword, followed by the trait name and the type.

// Example: Implementing a Trait
struct Circle {
    radius: f64,
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }

    fn perimeter(&self) -> f64 {
        2.0 * std::f64::consts::PI * self.radius
    }
}

struct Rectangle {
    width: f64,
    height: f64,
}

impl Shape for Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }

    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }
}

fn main() {
    let circle = Circle { radius: 5.0 };
    let rectangle = Rectangle { width: 4.0, height: 6.0 };

    println!("Circle area: {}, perimeter: {}", circle.area(), circle.perimeter()); // Output: Circle area: 78.53981633974483, perimeter: 31.41592653589793
    println!("Rectangle area: {}, perimeter: {}", rectangle.area(), rectangle.perimeter()); // Output: Rectangle area: 24, perimeter: 20
}

// Trait Bounds
// Trait bounds specify which traits a generic type must implement.

// Example: Trait Bounds
fn print_area<T: Shape>(shape: &T) {
    println!("Area: {}", shape.area());
}

fn main() {
    let circle = Circle { radius: 5.0 };
    let rectangle = Rectangle { width: 4.0, height: 6.0 };

    print_area(&circle); // Output: Area: 78.53981633974483
    print_area(&rectangle); // Output: Area: 24
}

// Subtopic: Default Implementations
// Traits can provide default implementations for methods.
// Types can override these default implementations if needed.

// Example: Default Implementations
trait Display {
    fn display(&self) -> String;
    fn print(&self) {
        println!("{}", self.display());
    }
}

struct Point {
    x: i32,
    y: i32,
}

impl Display for Point {
    fn display(&self) -> String {
        format!("({}, {})", self.x, self.y)
    }
}

fn main() {
    let point = Point { x: 10, y: 20 };
    point.print(); // Output: (10, 20)
}

// Traits as Parameters
// Traits can be used as parameters to functions.
// This allows you to write functions that can work with any type that implements the trait.

// Example: Traits as Parameters
fn print_summary(item: &impl Summary) {
    println!("Summary: {}", item.summarize());
}

trait Summary {
    fn summarize(&self) -> String;
}

struct Article {
    headline: String,
    author: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{} by {}", self.headline, self.author)
    }
}

fn main() {
    let article = Article {
        headline: String::from("Traits in Rust"),
        author: String::from("John Smith"),
    };
    print_summary(&article); // Output: Summary: Traits in Rust by John Smith
}

// -----------------------------------------------------------------------------------------------------
// 14. Lifetimes
// -----------------------------------------------------------------------------------------------------

// Lifetimes are a mechanism in Rust that helps the compiler ensure that references are always valid.
// Lifetimes are primarily used when dealing with references and borrowing.
// They are a compile-time concept and do not affect runtime performance.

// Lifetime Annotations
// Lifetime annotations are used to specify the lifetime of references.
// They are written using an apostrophe `'` followed by a lifetime name (e.g., `'a`).

// Example:
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    // The `'a` lifetime annotation indicates that the returned reference has the same lifetime as the input references.
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string");
    let string2 = "short";
    let result = longest(string1.as_str(), string2);
    println!("The longest string is: {}", result); // Output: The longest string is: long string
}

// Lifetime Elision
// In many cases, Rust can infer lifetimes automatically without explicit annotations.
// This is known as lifetime elision.
// There are a few rules that the compiler uses to determine lifetimes.

// Example:
fn first_word(s: &str) -> &str {
    // Rust automatically infers the lifetime of the return value.
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}

fn main() {
    let my_string = String::from("Hello world");
    let word = first_word(&my_string);
    println!("First word: {}", word); // Output: First word: Hello
}

// Structs with Lifetimes
// Structs can also have lifetime parameters.
// This is useful when a struct contains references.

// Example:
struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().expect("Could not find a '.'");
    let excerpt = ImportantExcerpt { part: first_sentence };
    println!("Excerpt: {}", excerpt.part); // Output: Excerpt: Call me Ishmael
}

// Lifetime Annotations in Methods
// Methods can also have lifetime parameters.

// Example:
impl<'a> ImportantExcerpt<'a> {
    fn level(&self) -> i32 {
      self.part.len() as i32
    }
}

fn main() {
  let novel = String::from("Call me Ishmael. Some years ago...");
  let first_sentence = novel.split('.').next().expect("Could not find a '.'");
  let excerpt = ImportantExcerpt { part: first_sentence };
  println!("Level: {}", excerpt.level()); // Output: Level: 16
}

// -----------------------------------------------------------------------------------------------------
// 15. Collections
// -----------------------------------------------------------------------------------------------------

// Rust provides several collection types for storing and managing data.
// Common collections include vectors (`Vec`), strings (`String`), and hash maps (`HashMap`).

// Vectors (`Vec`)
// Vectors are resizable arrays that can store elements of the same type.

// Example: Creating and Using Vectors
fn main() {
    // Creating a new vector
    let mut numbers: Vec<i32> = Vec::new();
    numbers.push(1);
    numbers.push(2);
    numbers.push(3);

    // Creating a vector using the `vec!` macro
    let more_numbers = vec![4, 5, 6];

    // Accessing elements by index
    let first = numbers[0];
    println!("First element: {}", first); // Output: First element: 1

    // Iterating over a vector
    for number in &numbers {
        println!("Number: {}", number); // Output: Number: 1, Number: 2, Number: 3
    }

    // Removing an element from a vector
    numbers.pop();
    println!("Remaining numbers: {:?}", numbers); // Output: Remaining numbers: [1, 2]
}

// Strings (`String`)
// Strings are growable, UTF-8 encoded sequences of characters.

// Example: Creating and Using Strings
fn main() {
    // Creating a new string
    let mut message = String::new();
    message.push_str("Hello, ");
    message.push_str("world!");

    // Creating a string from a literal
    let greeting = String::from("Greetings!");

    // Appending to a string
    message.push('!');

    // Accessing characters in a string (using iterators)
    for char in message.chars() {
        println!("Character: {}", char); // Output: Character: H, Character: e, Character: l, Character: l, Character: o, Character: ,, Character:  , Character: w, Character: o, Character: r, Character: l, Character: d, Character: !, Character: !
    }

    println!("Message: {}", message); // Output: Message: Hello, world!!
    println!("Greeting: {}", greeting); // Output: Greeting: Greetings!
}

// Hash Maps (`HashMap`)
// Hash maps store key-value pairs, where keys are unique and values can be accessed by their keys.

// Example: Creating and Using Hash Maps
use std::collections::HashMap;

fn main() {
    // Creating a new hash map
    let mut scores: HashMap<String, i32> = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Red"), 20);

    // Creating a hash map using the `collect` method
    let teams = vec![String::from("Yellow"), String::from("Green")];
    let initial_scores = vec![30, 40];
    let more_scores: HashMap<_, _> = teams.into_iter().zip(initial_scores.into_iter()).collect();

    // Accessing values by key
    let blue_score = scores.get("Blue");
    match blue_score {
        Some(score) => println!("Blue score: {}", score), // Output: Blue score: 10
        None => println!("No score for Blue"),
    }

    // Iterating over a hash map
    for (team, score) in &scores {
        println!("Team: {}, Score: {}", team, score); // Output: Team: Red, Score: 20, Team: Blue, Score: 10 (order may vary)
    }
}

// -----------------------------------------------------------------------------------------------------
// 16. Concurrency
// -----------------------------------------------------------------------------------------------------

// Rust provides excellent support for concurrency, allowing you to write programs that can perform multiple tasks simultaneously.
// Rust's concurrency features are built on the principles of safety and performance.

// Threads
// Threads are lightweight processes that can run concurrently within a program.

// Example: Creating and Using Threads
use std::thread;
use std::time::Duration;

fn main() {
    // Creating a new thread
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("Thread: {}", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("Main: {}", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap(); // Wait for the thread to finish
}

// Message Passing
// Message passing is a way for threads to communicate with each other by sending messages.
// Rust provides channels for message passing.

// Example: Message Passing
use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let message = String::from("Hello from thread!");
        tx.send(message).unwrap(); // Send the message through the channel
    });

    let received = rx.recv().unwrap(); // Receive the message from the channel
    println!("Received: {}", received); // Output: Received: Hello from thread!
}

// Shared State Concurrency
// Shared state concurrency involves multiple threads accessing and modifying shared data.
// This can be complex and error-prone, but Rust provides mechanisms to ensure safety.

// Example: Shared State with Mutex
use std::sync::{Arc, Mutex};

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap(); // Acquire the lock to access the shared data
            *num += 1; // Modify the shared data
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Counter: {}", *counter.lock().unwrap()); // Output: Counter: 10
}

// -----------------------------------------------------------------------------------------------------
// 17. Testing
// -----------------------------------------------------------------------------------------------------

// Rust has built-in support for testing, allowing you to write unit tests and integration tests.
// Tests are used to verify that your code works as expected.

// Unit Tests
// Unit tests are used to test individual functions or modules.
// They are typically placed in the same file as the code they are testing.

// Example: Unit Tests
fn add(x: i32, y: i32) -> i32 {
    x + y
}

#[cfg(test)] // This attribute indicates that the following module is a test module
mod tests {
    use super::*; // Import the code from the parent module

    #[test] // This attribute indicates that the following function is a test function
    fn test_add() {
        assert_eq!(add(2, 3), 5); // Assert that the result of add(2, 3) is equal to 5
        assert_ne!(add(2, 3), 6); // Assert that the result of add(2, 3) is not equal to 6
    }
}

// Integration Tests
// Integration tests are used to test the interaction between different parts of your code.
// They are typically placed in a separate `tests` directory.

// Example: Integration Tests
// Create a `tests` directory in your project root.
// Create a file named `integration_test.rs` inside the `tests` directory.
// Add the following code to `tests/integration_test.rs`:

// tests/integration_test.rs
// extern crate your_crate_name; // Replace `your_crate_name` with the name of your crate

// #[test]
// fn test_integration() {
//     assert_eq!(your_crate_name::add(2, 3), 5); // Assert that the result of add(2, 3) is equal to 5
// }

// -----------------------------------------------------------------------------------------------------
// 18. Macros
// -----------------------------------------------------------------------------------------------------

// Macros are a powerful feature of Rust that allow you to write code that generates other code.
// They are useful for reducing code duplication and creating more expressive APIs.
// Macros are expanded at compile time.

// Declarative Macros
// Declarative macros are defined using the `macro_rules!` syntax.
// They are based on pattern matching and code substitution.

// Example: Declarative Macro
macro_rules! my_macro {
    ($x:expr, $y:expr) => {
        {
            let result = $x + $y;
            println!("Result: {}", result);
        }
    };
}

fn main() {
    my_macro!(5, 3); // Output: Result: 8
    my_macro!(10, 20); // Output: Result: 30
}

// Procedural Macros
// Procedural macros are defined using functions.
// They are more powerful than declarative macros, but also more complex.
// Procedural macros are used for more complex code generation tasks.

// Example: Defining a Procedural Macro
// Procedural macros require a separate crate.
// Create a new library crate named `my_proc_macro` using `cargo new --lib my_proc_macro`.
// Add the following code to `src/lib.rs`:

// src/lib.rs
// extern crate proc_macro;
// use proc_macro::TokenStream;

// #[proc_macro_derive(MyDerive)]
// pub fn my_derive(input: TokenStream) -> TokenStream {
//     let ast: syn::DeriveInput = syn::parse(input).unwrap();
//     let name = &ast.ident;
//     let output = quote::quote! {
//         impl #name {
//             fn hello() {
//                 println!("Hello from {}", stringify!(#name));
//             }
//         }
//     };
//     output.into()
// }

// Example: Using a Procedural Macro
// In a new binary crate, add `my_proc_macro` as a dependency in `Cargo.toml`.
// Then in `src/main.rs`, add the following code:

// Cargo.toml
// [dependencies]
// my_proc_macro = { path = "../my_proc_macro" }

// src/main.rs
// #[macro_use]
// extern crate my_proc_macro;

// #[derive(MyDerive)]
// struct MyStruct;

// fn main() {
//     MyStruct::hello(); // Output: Hello from MyStruct
// }

// -----------------------------------------------------------------------------------------------------
// 19. Unsafe Rust
// -----------------------------------------------------------------------------------------------------

// Unsafe Rust is a feature of Rust that allows you to perform operations that are not guaranteed to be memory-safe.
// Unsafe Rust should be used sparingly and only when necessary.
// It is important to understand the risks involved when using unsafe code.

// `unsafe` Keyword
// The `unsafe` keyword is used to mark blocks of code that may perform unsafe operations.

// Example: `unsafe` Keyword
fn main() {
    let mut x = 10;
    let ptr = &mut x as *mut i32; // Create a raw pointer to x

    unsafe {
        *ptr = 20; // Dereference the raw pointer (unsafe operation)
    }

    println!("x: {}", x); // Output: x: 20
}

// Raw Pointers
// Similar to pointers in C.
// They do not have the same safety guarantees as references.
// Raw pointers can be null, dangling, or point to invalid memory.

// Example: Raw Pointers
fn main() {
    let x = 10;
    let ptr1 = &x as *const i32; // Create an immutable raw pointer
    let ptr2 = &x as *const i32; // Create another immutable raw pointer

    unsafe {
        println!("Value at ptr1: {}", *ptr1); // Dereference the raw pointer (unsafe operation)
        println!("Value at ptr2: {}", *ptr2); // Dereference the raw pointer (unsafe operation)
    }
}

// Unsafe Functions
// Functions can be marked as `unsafe` to indicate that they may perform unsafe operations.
// Calling an unsafe function requires an `unsafe` block.

// Example: Unsafe Function
unsafe fn dangerous_function() {
    println!("This is a dangerous function!");
}

fn main() {
    unsafe {
        dangerous_function(); // Call the unsafe function (unsafe operation)
    }
}

// FFI (Foreign Function Interface)
// FFI allows you to call code written in other languages, such as C.
// FFI often involves unsafe operations.

// Example: FFI (Simplified)
// This is a simplified example and requires a C library to be linked.
// extern "C" {
//     fn my_c_function(x: i32) -> i32;
// }

// fn main() {
//     let result = unsafe {
//         my_c_function(10) // Call the C function (unsafe operation)
//     };
//     println!("Result from C: {}", result);
// }

// Happy coding!