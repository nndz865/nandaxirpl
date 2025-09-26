project(mt5-clone)
cmake_minimum_required(VERSION 3.10)

# Set the project name
project(MetaTrader5Clone)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Include directories
include_directories(src/core/engine)

# Add the core engine
add_subdirectory(src/core/engine)

# Add the server
add_subdirectory(src/server)

# Add the client
add_subdirectory(src/client)

# Add tests
enable_testing()
add_subdirectory(tests)

# Add any additional configurations or dependencies here as needed.