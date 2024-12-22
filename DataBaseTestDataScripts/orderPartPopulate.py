import pandas as pd
import os

def getOrderParts():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\Rapport OA (Kit complet) v2(Query1).csv', sep=';', dtype='str')
    df = df[['order_id', 'qty', 'sku_color']]
    df.dropna(subset={'order_id', 'sku_color', 'qty'}, inplace=True)
    df['qty'] = df['qty'].str.replace(',', '.')
    df= df.rename(columns={'order_id':'order_id_id', 'sku_color': 'sku_color_id'})
    return df

def main():
    print("python main function")
    df=getOrderParts()
    print(df)
    df.to_csv(os.getcwd()+'\DataBaseTestDataScripts\orderPartTableTestData.csv', index=False, sep=';')


if __name__ == '__main__':
    main()