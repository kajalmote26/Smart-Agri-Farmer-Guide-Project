package com.app.exception_handler;

public class ResourceNotFoundException1 extends RuntimeException
{

  private static final long serialVersionUID = 1L;

  public ResourceNotFoundException1(String msg) {
    super(msg);
  }
}