import capitalize from './capitalize';

function categoryOptions(selectedValue) {
  const categories = ['travel', 'motivation', 'lifestyle', 'fashion', 'art', 'design'];
  let categoriesOptions = [];

  for (let key in categories) {
    let option = (
      <option key={key} value={categories[key]}>
        {capitalize(categories[key])}
      </option>
    );

    categoriesOptions.push(option);
  }

  return categoriesOptions;
}

export default categoryOptions;