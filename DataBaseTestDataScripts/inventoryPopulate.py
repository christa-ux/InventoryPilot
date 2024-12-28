import pandas as pd
import os

def pullFromInventaire499():
    df=pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\INVENTAIRE 499 Live(499 A).csv', sep=';')
    df= df[['location','warehouse_number','qty','sku_color']]
    df=df.dropna(subset=['location', 'sku_color', 'qty'])
    df['amount_needed'] = 0
    df.reset_index(drop=True, inplace=True)
    df['qty']=df['qty'].str.replace('VIDE', '0')
    #print(df)
    return df

def addMissingPartsForPartsTableFK():
    dfInventory=pullFromInventaire499()
    dfParts=pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\partsTableTestDataVersion2.csv', sep=';')
    dfmerge= pd.merge(dfInventory, dfParts, left_on=['sku_color'], right_on=['sku_color'], how='outer', indicator=True)
    dfNewParts=dfmerge[dfmerge['_merge']=='left_only']
    dfNewParts=dfNewParts[['sku_color']]
    print(dfNewParts)
    dfNewParts.to_csv(os.getcwd()+'\DataBaseTestDataScripts\partsToFulfillInventoryFK.csv', index=False, sep=';')


def main():
    print("python main function")
    addMissingPartsForPartsTableFK()
    '''
    df = pullFromInventaire499()
    df = df.rename(columns={'sku_color':'sku_color_id'})
    df.to_csv(os.getcwd()+'\DataBaseTestDataScripts\inventoryTableTestData.csv', index=False, sep=';')
    '''

if __name__ == '__main__':
    main()