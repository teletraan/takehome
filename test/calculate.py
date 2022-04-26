"""
__author__ = '10'
"""


class Calculate:
    def cal(self, a, b, c):
        res = []
        data = [x for x in [a, b, c] if type(x) == int]
        if len(data) == 3:
            if a+b+c != 5:
                print("err")
            elif a+b+c == 5:
                for i in [a, b, c]:
                    if i > 0:
                        res.append(i)
                    else:
                        pass
                print(res)
        elif len(data) != 3:
            print("数据类型错误")


if __name__ == '__main__':
    cc = Calculate()
    cc.cal(-1, 1, 5)
