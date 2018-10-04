export const pagingAction = i =>{
  return {
    type:'PAGE_ACTION',
    page:i
  }
}

export const topArticleVisibility = is_visibility =>{
  return {
    type:'TOP_ARTICLE_VISIBILITY',
    is_visibility : is_visibility
  };
}
