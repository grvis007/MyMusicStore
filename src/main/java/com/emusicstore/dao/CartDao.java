package com.emusicstore.dao;

import com.emusicstore.model.Cart;

import java.io.IOException;

/**
 * Created by Gaurav Shankar on 1/2/2017.
 */
public interface CartDao {

    Cart create(Cart cart);

    Cart read(String cartId);

    Cart update(String cardId,Cart cart);

    void delete(String cardId);
}