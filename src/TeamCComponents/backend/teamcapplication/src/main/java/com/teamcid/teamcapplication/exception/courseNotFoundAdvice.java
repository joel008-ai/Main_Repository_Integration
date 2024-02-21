// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.exception;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class courseNotFoundAdvice {
   public courseNotFoundAdvice() {
   }

   @ResponseBody
   @ExceptionHandler({courseNotFoundException.class})
   @ResponseStatus(HttpStatus.NOT_FOUND)
   public Map<String, String> ExceptionHandler(courseNotFoundException exception) {
      Map<String, String> errorMap = new HashMap();
      errorMap.put("errorMessage", exception.getMessage());
      return errorMap;
   }
}
