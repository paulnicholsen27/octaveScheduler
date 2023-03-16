import csv
import json
from os.path import dirname, join

mfr_map = {
    "A":"American Home Food Products",
    "G":"General Mills",
    "K":"Kelloggs",
    "N":"Nabisco",
    "P":"Post",
    "Q":"Quaker Oats",
    "R":"Ralston Purina",
    }
cereal_info = {"cereals": []}

current_dir = dirname(__file__) # get directory of this file
file_path = join(current_dir, "./cereal.csv") # concatenate with name of csv file
with open(file_path, 'r') as csvf: # open csv file in read-mode
    csvReader = csv.DictReader(csvf) # turn csv into a dictionary
    for row in csvReader: # parse into desired format
        cereal_info["cereals"].append(
            {"name": row["name"],
             "manufacturer": mfr_map[row["mfr"]], # turn single letter codes into full names
             "nutritional_info:": {
                "calories": row["calories"],
                "protein": row["protein"],
                "fat": row["fat"],
                "carbohydrates": row["carbo"]
             },
             "serving_size": row["cups"]
             }
        )

with open('cereal.json', 'w') as convert_file:
     convert_file.write(json.dumps(cereal_info))