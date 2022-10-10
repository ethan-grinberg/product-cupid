import pandas as pd

fashion_items = pd.read_csv("data/fashion.csv")
fashion_items = fashion_items[["ProductId", "ProductTitle", "ImageURL", "reviews", "price", "SubCategory"]].copy()

def get_rand_items(favorite=None, order=None, category=None):
    # if category was provided filter by category
    # otherwise show any products
    if not category is None:
        fashion_items_sub = fashion_items.loc[fashion_items.SubCategory == category]
    else:
        fashion_items_sub = fashion_items

    # show two random items on page load or category switch
    if favorite is None:
        items = fashion_items_sub.sample(2)
    # otherwise pick 1 random item
    else:
        fav = fashion_items_sub.loc[fashion_items_sub.ProductId == favorite]
        rand_item = fashion_items_sub.sample(1)
        # make sure they are sent back in the correct order
        # i.e. don't swtich places
        if order == '0':
            items = pd.concat([fav, rand_item])
        else:
            items = pd.concat([rand_item, fav])

    return items.to_dict(orient="records")

def get_categories():
    return list(fashion_items.SubCategory.unique())