<View style={styles.body}>
      <View>
      
      </View>
       

        <View>
        <View style={styles.menu}>
            <FlatList data={Menu} keyExtractor={item => item} renderItem={({item}) => <View style={[styles.list, styles.shadowProp]}><Text style={{color: '#333333'}}>{item}</Text></View>} horizontal scrollEnabled showsHorizontalScrollIndicator={false}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-start', gap: 10}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10}}>
          <Text style={{color:'rgba(39, 33, 77, 1)', fontSize: 18}}>Recommended Combo</Text>
          <View style={{width: 70, height: 2, backgroundColor: 'rgba(255, 164, 81, 1)'}}></View>
        </View> 
        <View style={{alignItems: 'center', gap: 10, marginTop: 10 }}>
        <FlatList data={RecommendedCard} keyExtractor={item => item.id} renderItem={({item}) => <View style={{marginLeft: 10}}><RecommendedCards icon={item.icon} img={item.img} text={item.text} price={item.price} icon2={item.icon2}/></View> } horizontal/> 
        </View>
        </View>
        <View style={styles.menu}>
            <FlatList data={Menu} keyExtractor={item => item} renderItem={({item}) => <View style={[styles.list, styles.shadowProp]}><Text style={{color: '#333333'}}>{item}</Text></View>} horizontal scrollEnabled showsHorizontalScrollIndicator={false}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-start', gap: 10}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10}}>
          <Text style={{color:'rgba(39, 33, 77, 1)', fontSize: 18}}>Recommended Combo</Text>
          <View style={{width: 70, height: 2, backgroundColor: 'rgba(255, 164, 81, 1)'}}></View>
        </View> 
        <View style={{alignItems: 'center', gap: 10, marginTop: 10 }}>
        <FlatList data={RecommendedCard} keyExtractor={item => item.id} renderItem={({item}) => <View style={{marginLeft: 10}}><RecommendedCards icon={item.icon} img={item.img} text={item.text} price={item.price} icon2={item.icon2}/></View> } horizontal/> 
        </View>
        </View>
        </View>
        
      </View>