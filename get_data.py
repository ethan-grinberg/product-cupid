import pandas as pd

fashion_items = pd.read_csv("data/fashion.csv")
fashion_items = fashion_items[["ProductId", "ProductTitle", "ImageURL", "reviews", "price"]].copy()

def get_rand_items(favorite=None, order=None):
    if favorite is None:
        items = fashion_items.sample(2)
    else:
        fav = fashion_items.loc[fashion_items.ProductId == favorite]
        rand_item = fashion_items.sample(1)
        if order == 0:
            items = pd.concat([fav, rand_item])
        else:
            items = pd.concat([rand_item, fav])

    #  # keep track of chosen itmes in session
    # chosen_items = items.ProductId.to_list()
    # curr_items = session['items']
    # curr_items.extend(chosen_items)
    # session['items'] = curr_items
    return items.to_dict(orient="records")