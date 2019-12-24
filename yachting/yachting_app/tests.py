import math

import pytest

from yachting_back.hello_world_app.hello_world import sample_sqrt


def test_correct() -> None:
    for x in range(1, 100, 10):
        assert sample_sqrt(x) == math.sqrt(x)


def test_zero() -> None:
    assert sample_sqrt(0) == math.sqrt(0)


def test_negative() -> None:
    with pytest.raises(ValueError):
        sample_sqrt(-1)
