import pandas as pd
import os
import numpy as np

def pullFromLabelMakerCSV():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\FICHE PRODUIT V2 (Our Label Maker with Photo)(Liste produit).csv', sep = ';', dtype={'qty_per_box':'str', 'length':'str'})
    print(df)
    df=df.drop(columns=['In List', 'image'])
    print(df)
    df=df.drop_duplicates(subset=['sku_color'])
    df['weight'] = df['weight'].str.replace(',', '.')
    df['lbs1400'] = df['lbs1400'].str.replace(',', '.')
    df['qty_per_box'] = df['qty_per_box'].str.replace('.0', '')
    df['length'] = df['length'].str.replace('.0', '')
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
    df=df.drop_duplicates(subset=['sku_color'])
    df = df[['sku_color', 'sku', 'description']]
    #df['description'] = df['description'].str.replace(' TXPT', '')
    #df['description'] = df['description'].str.replace(' GLBK', '')
    print(df)
    df2=pullFromLabelMakerCSV()
    df_merge = pd.merge(df2, df, left_on=['sku_color','sku'], right_on=['sku_color','sku'], how='outer')
    #df_merge = df_merge.drop(columns=['GenericCode'])
    print(df_merge)
    return df_merge

def pullFromRapportOA():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\Rapport OA (Kit complet) v2(Query1).csv', sep=';')
    df = df.drop_duplicates(subset=['sku_color'])
    df = df[['sku_color', 'sku', 'description']]
    df2 = pullFromAnalyseCMD()
    df_merge = pd.merge(df2, df, left_on=['sku_color', 'sku', 'description'], right_on=['sku_color', 'sku', 'description'], how='outer')
    df_merge = df_merge.drop_duplicates(subset=['sku_color'])
    print('last')
    print(df_merge)
    return df_merge

def orderColumns():
    df = pullFromRapportOA()
    cols = list(df.columns.values)
    df = df[['sku_color', 'sku', 'old_sku', 'description', 'qty_per_box', 'weight', 'length', 'lbs1400', 'crate_size']]
    print(df)
    df.to_csv(os.getcwd()+'\DataBaseTestDataScripts\partsTableTestDataVersion2.csv', index=False, sep=';')

def main():
    print("python main function")
    orderColumns()


if __name__ == '__main__':
    main()