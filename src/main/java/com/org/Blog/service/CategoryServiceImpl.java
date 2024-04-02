package com.org.Blog.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.org.Blog.entity.Category;
import com.org.Blog.exceptions.ResourceNotFoundException;
import com.org.Blog.payloads.CategoryDto;
import com.org.Blog.respositry.CategoryRepositry;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepositry categoryRepositry;

	@Autowired
	private ModelMapper modelMapper;

	// this class has category class to categoryDto load class pass the value

	private Category dtoToCategery(CategoryDto categoryDto) {
		Category category = this.modelMapper.map(categoryDto, Category.class);
		return category;
	}

	public CategoryDto categerytoDto(Category category) {
		CategoryDto categoryDto = this.modelMapper.map(category, CategoryDto.class);
		return categoryDto;
	}

	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) {
		Category category = this.dtoToCategery(categoryDto);
		Category category2 = this.categoryRepositry.save(category);

		// return this.categerytoDto(category2);
		return this.modelMapper.map(category2, CategoryDto.class);
	}

	@Override
	public CategoryDto updateCategory(CategoryDto categoryDto, Long categoryID) {
		Category category = this.categoryRepositry.findById(categoryID)
				.orElseThrow(() -> new ResourceNotFoundException("category ", "category ID", categoryID));
		category.setCategoryDescription(categoryDto.getCategoryDescription());
		category.setCategoryTitle(categoryDto.getCategoryTitle());

		Category category2 = this.categoryRepositry.save(category);
		return this.modelMapper.map(category2, CategoryDto.class);
	}

	@Override
	public void deleteCategory(Long categoryId) {
		Category category = this.categoryRepositry.findById(categoryId)
				.orElseThrow(() -> new ResourceNotFoundException("category", "category id", categoryId));
		this.categoryRepositry.delete(category);
	}

	@Override
	public List<CategoryDto> getCategory() {
		List<Category> categories = this.categoryRepositry.findAll();
		List<CategoryDto> categoryDtos = categories.stream().map(category -> this.categerytoDto(category))
				.collect(Collectors.toList());
		return categoryDtos;
	 
	}

	@Override
	public CategoryDto categoryId(Long categoryID) {
		Category category = this.categoryRepositry.findById(categoryID)
				.orElseThrow(() -> new ResourceNotFoundException("category ", "category id", categoryID));
		return this.modelMapper.map(category, CategoryDto.class);
	}

}