package com.example;

import com.example.laPalestra.entity.User;
import com.example.laPalestra.service.api.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertNotNull;

/**
 * Created by anatol on 14.4.17.
 */
public class UserServiceTest extends BaseApplicationTest {


    @Autowired
    private UserService userService;

    @Test
    public void userServiceSaveTest() {
        User user = new User("Egor", "256", "00000");
        userService.save(user);
        assertNotNull(user.getId());
    }
}
