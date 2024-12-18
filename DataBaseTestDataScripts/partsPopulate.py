import pandas as pd
import os
import numpy as np

def pullFromLabelMakerCSV():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\FICHE PRODUIT V2 (Our Label Maker with Photo)(Liste produit).csv', sep = ';', dtype={'qty_per_box':'str'})
    print(df)
    df=df.drop(columns=['In List', 'image'])
    print(df)
    df=df.drop_duplicates(subset=['sku'])
    df['weight'] = df['weight'].str.replace(',', '.')
    df['lbs1400'] = df['lbs1400'].str.replace(',', '.')
    df['qty_per_box'] = df['qty_per_box'].str.replace('.0', '')
    '''
    for index, row in df.iterrows():
        if(not(pd.isnull(row['qty_per_box']))):
            row['qty_per_box'] = int(row['qty_per_box'])
    '''

    print(df)
    return df

def pullFromAnalyseCMD():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\Analyse CMD 83124 (An Example of one order from Start to end_Note that data may be wrong due to one department entry)(Rapport OA).csv', sep=';')
    print(df)
    df=df.drop_duplicates(subset=['GenericCode'])
    df = df[['GenericCode', 'description']]
    df['description'] = df['description'].str.replace(' TXPT', '')
    df['description'] = df['description'].str.replace(' GLBK', '')
    print(df)
    df2=pullFromLabelMakerCSV()
    df_merge = pd.merge(df2, df, left_on='sku', right_on='GenericCode', how='left')
    df_merge = df_merge.drop(columns=['GenericCode'])
    print(df_merge)
    return df_merge

def orderColumns():
    df = pullFromAnalyseCMD()
    cols = list(df.columns.values)
    df = df[['sku', 'old_sku', 'description', 'qty_per_box', 'weight', 'length', 'lbs1400', 'crate_size']]
    print(df)
    df.to_csv(os.getcwd()+'\DataBaseTestDataScripts\partsTableTestData.csv', index=False, sep=';')

def main():
    print("python main function")
    orderColumns()


if __name__ == '__main__':
    main()