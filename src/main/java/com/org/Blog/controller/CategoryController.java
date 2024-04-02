package com.org.Blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.org.Blog.payloads.ApiResponse;
import com.org.Blog.payloads.CategoryDto;
import com.org.Blog.service.CategoryService;

import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;

	// create
	@PostMapping("/postCategories")
	public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto) {
		CategoryDto categoryDto2 = this.categoryService.createCategory(categoryDto);
		return new ResponseEntity<CategoryDto>(categoryDto2, HttpStatus.CREATED);
	}

	// update
	@PutMapping("/update/{categoryId}")
	public ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto categoryDto,
			@PathVariable Long categoryId) {
		CategoryDto updatecategory = this.categoryService.updateCategory(categoryDto, categoryId);
		return new ResponseEntity<CategoryDto>(updatecategory, HttpStatus.OK);
	}

	@DeleteMapping("/dele/{categoryId}")
	public ResponseEntity<ApiResponse> deletecategory(@PathVariable Long categoryId) {
		this.categoryService.deleteCategory(categoryId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("category id deleted succefuly", false), HttpStatus.OK);
	}

	@GetMapping("/get/{categorid}")
	public ResponseEntity<CategoryDto> getCategoryId(@PathVariable Long categorid) {
		CategoryDto categoryDto = this.categoryService.categoryId(categorid);
		return new ResponseEntity<CategoryDto>(categoryDto, HttpStatus.OK);
	}

	@GetMapping("/")
	public ResponseEntity<List<CategoryDto>> getCategoryDetails() {
		List<CategoryDto> categoryDto = this.categoryService.getCategory();
		return ResponseEntity.ok(categoryDto);
	}

}