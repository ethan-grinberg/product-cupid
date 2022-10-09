import pandas as pd

fashion_items = pd.read_csv("data/fashion.csv")
fashion_items = fashion_items[["ProductId", "ProductTitle", "ImageURL"]].copy()

def get_rand_items(session=None):
    # if not "curr_best" in session:
    #     items = fashion_items.sample(2)
    # else:
    #     fav_id = session['curr_best']
    #     fav = fashion_items.loc[fashion_items.ProductId == fav_id]
    #     rand_item = fashion_items.sample(1)
    #     items = pd.concat([fav, rand_item])

    #  # keep track of chosen itmes in session
    # chosen_items = items.ProductId.to_list()
    # curr_items = session['items']
    # curr_items.extend(chosen_items)
    # session['items'] = curr_items
    items = fashion_items.sample(2)

    return items.to_dict(orient="records")