<?php
for ($i = 1; $i <= 100; $i++) {
    if ($i % 2 == 0 && $i % 5 == 0) {
        echo "FizzBuzz" . "<br>";
    } elseif ($i % 2 == 0) {
        echo "Fizz" . "<br>";
    } elseif ($i % 5 == 0) {
        echo "Buzz" . "<br>";
    } else {
        echo $i . "<br>";
    }
}
?>