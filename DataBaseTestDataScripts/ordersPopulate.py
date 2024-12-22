import pandas as pd
import os

def getOrders():
    df = pd.read_csv(os.getcwd()+'\DataBaseTestDataScripts\Rapport OA (Kit complet) v2(Query1).csv', sep=';', dtype={'order_id':'str'})
    df = df[['order_id', 'due_date']]
    df = df.drop_duplicates(subset='order_id')
    df['due_date'] = pd.to_datetime(df['due_date'], format="%d/%m/%Y")
    df.dropna(subset='order_id', inplace=True)
    return df

def main():
    print("python main function")
    df=getOrders()
    print(df)
    df.to_csv(os.getcwd()+'\DataBaseTestDataScripts\ordersTableTestData.csv', index=False, sep=';')


if __name__ == '__main__':
    main()