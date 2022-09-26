package com.app.pojos;

public enum UserRoles
{
	FARMER, ADMIN,SHOPOWNER,DRIVER;
	
	@Override
    public String toString() {
        return name().toLowerCase();
    }
}
