package com.example.laPalestra.utils;

/**
 * Created by anatol on 13.4.17.
 */
public class Constants {
    public static class JdbcStrings {
        public static final String SELECT = "SELECT * FROM ";
        public static final String WITH_ID = " WHERE id = ? ";
        public static final String INSERT_INTO = "INSERT INTO ";
        public static final String DELETE = "DELETE FROM ";

        public static final String USER_TABLE = " User (first_name, last_name, phone) ";
        public static final String GYM_TABLE = " Gym (maxSpaces, address) ";
        public static final String SERVICE_TABLE = " Service (comment, price) ";

        public static final String UPDATE_GYM = "UPDATE Gym SET maxSpaces = ?, address = ? WHERE id_hole =?";
        public static final String UPDATE_USER = "UPDATE User SET first_name = ?, last_name = ?, phone = ? WHERE id_user =?";
        public static final String UPDATE_SERVICE = "UPDATE Service SET comment = ?, price = ? WHERE id_service =?";

    }
}
