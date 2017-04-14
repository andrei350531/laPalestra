package com.example;

import com.example.config.TestConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes={TestConfig.class})
public class BaseApplicationTest {

    @Test
    public void contextLoads() {


    }

}
