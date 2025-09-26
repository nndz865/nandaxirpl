project(mt5-clone)
cmake_minimum_required(VERSION 3.10)

project(MT5Clone)

set(CMAKE_CXX_STANDARD 14)

# Add the core engine source files
add_library(engine
    engine.cpp
    engine.h
)

# Include directories
target_include_directories(engine PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

# Add any additional dependencies or configurations here
# For example, linking with external libraries
# target_link_libraries(engine <library_name>)